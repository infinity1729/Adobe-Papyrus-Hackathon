require('dotenv').config()
const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');
const { error } = require('console');
const fs = require('fs');

module.exports.getResume=async(req,res)=>{
    try{
        const data= req.body;
        console.log(data);
        const OUTPUT =`../results/${data.template}_${Date.now()}.pdf`;    
        const INPUT = `./ResumeTemplates/${data.template}/${data.template}.docx`
        const JSON_INPUT= {
            "Name": data.firstName?data.firstName:"",
            "LastName": data.lastName?data.lastName:"",
            "EmailAddress": data.emailAddress?data.emailAddress:"",
            "PhoneNumber": data.phoneNumber?data.phoneNumber:"",
            "LinkedIn": data.linkedInURL?`<a href=\"${data.linkedInURL}">LinkedIn</a>`:"",
            "JobTitle": data.jobTitle?data.jobTitle:"",
            "Summary" : data.summary?data.summary:"",
            "Skills": data.skills?data.skills:[],
            "Education": data.education?data.education.map((element) => ({
                "SchoolName":element.schoolName,
                "Year":element.year,
                "Description":element.description,}))
                :[],
            "Experience": data.workExperience?data.workExperience.map((element) => ({
                "CompanyName":element.companyName,
                "Year":element.year,
                "Description":element.description,}))
                :[],
            "Achievements": data.achievements
                    ? data.achievements.map((element) => ({
                        "Type": element.type,
                        "Description": element.description
                        }))
                    : []
        };

        const credentials =  PDFServicesSdk.Credentials
        .servicePrincipalCredentialsBuilder()
        .withClientId(process.env.PDF_SERVICES_CLIENT_ID)
        .withClientSecret(process.env.PDF_SERVICES_CLIENT_SECRET)
        .build();
        // Create an ExecutionContext using credentials
        const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);
        const documentMerge = PDFServicesSdk.DocumentMerge,
        documentMergeOptions = documentMerge.options,
        options = new documentMergeOptions.DocumentMergeOptions(JSON_INPUT, documentMergeOptions.OutputFormat.PDF);
        
        // Create a new operation instance using the options instance.
        const documentMergeOperation = documentMerge.Operation.createNew(options);

        // Set operation input document template from a source file.
        const input = PDFServicesSdk.FileRef.createFromLocalFile(INPUT);
        documentMergeOperation.setInput(input);
        // Execute the operation and Save the result to the specified location.
        documentMergeOperation.execute(executionContext)
        .then(result => result.saveAsFile(OUTPUT))
        .catch(err => {
            if(err instanceof PDFServicesSdk.Error.ServiceApiError
                || err instanceof PDFServicesSdk.Error.ServiceUsageError) {
                console.log('Exception encountered while executing operation', err);
            } else {
                console.log('Exception encountered while executing operation', err);
            }
        });
    }
    catch (err){
        console.log(err);
    }
    
}














