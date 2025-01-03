// Import AVA framework
const test = require('ava');

// Import service functions from Announcement service
const { announcementEntity } = require("../service/AnnouncementService.js");
const { getAnnouncementEntity } = require("../service/AnnouncementService.js");
const { setAnnouncementAttributes } = require("../service/AnnouncementService.js");
const { deleteAnnouncementEntity } = require("../service/AnnouncementService.js");

// Test case for getting an announcement by ID
test('GET /announcement/{announcementId} should return an announcement', async (t) => {
    const AnnouncementEntity = await getAnnouncementEntity(154); 
    
    console.log(AnnouncementEntity);

    t.is(AnnouncementEntity.status, 200);
    t.truthy(AnnouncementEntity.body.announcementID == 154);
    t.truthy(AnnouncementEntity.body.announcementTitle == "Venizelou station");
    t.truthy(AnnouncementEntity.body.announcementBody == "Venizelou station will remain closed due to maintenance");
});

// Test case for getting an announcement not found error message
test('GET /announcement/{announcementId} should return 404 if announcement not found', async (t) => {
    const announcementNotFound = await getAnnouncementEntity(155); // 155: AnnouncementID TODO: generateTestID function

    console.log("Announcement not found:", announcementNotFound);

    t.is(announcementNotFound.status, 404);
    t.is(announcementNotFound.body.message, "Announcement not found");
});

// Test case for creating a new announcement
test('POST /announcement should create an announcement', async (t) => {
    const newAnnouncement = {
        "announcementID": 154,
        "upload-date": "2000-01-23T04:56:07.000+00:00",
        "announcementTitle": "Venizelou station",
        "announcementBody": "Venizelou station will remain closed due to maintenance"
    };
    
    const response = await announcementEntity(newAnnouncement);
    console.log('Create Announcement test:', response);

    t.truthy(response);
    t.is(response.announcementID, 154);
    t.is(response.announcementTitle, "Venizelou station");
    t.is(response.announcementBody, "Venizelou station will remain closed due to maintenance");
});

// Test case for an empty announcement body
test('POST /announcement should handle empty announcement', async (t) => {
    const emptyAnnouncement = {};
    
    const response = await announcementEntity(emptyAnnouncement);
    console.log('Empty Announcement test:', response);

    t.is(response, undefined);
});

// Test case for an empty announcement title
test('POST /announcement should handle empty announcement title', async (t) => {
    const emptyAnnouncementTitle = {
        "announcementID": 154,
        "upload-date": "2000-01-23T04:56:07.000+00:00",
        "announcementTitle": undefined,
        "announcementBody": "Venizelou station will remain closed due to maintenance"
    };
    
    const response = await announcementEntity(emptyAnnouncementTitle);
    console.log('Empty Announcement Title test:', response);

    t.is(response.status, 400);
    t.is(response.body.message, "Announcement without a title");
});

// Test case for an updated announcement
test('PUT /announcement/{announcementId} should update an announcement', async (t) => {
    const updatedAnnouncement = {
        "announcementID" : 154,
        "upload-date" : "2000-01-23T04:56:07.000+00:00",
        "announcementTitle" : "Venizelou station",
        "announcementBody" : "Venizelou station will remain closed due to maintenance"
    };

    const response = await setAnnouncementAttributes(updatedAnnouncement);
    
    t.is(response.status, 200);
    t.is(response.body.announcementTitle, "Venizelou station");
    t.is(response.body.announcementBody, "Venizelou station will remain closed due to maintenance");
});

// Test case for an announcement that wasn't found
test('PUT /announcement should return 404 if announcement not found', async (t) => {
    const updatedAnnouncement = {
        "announcementID" : 155,
        "upload-date" : "2000-01-23T04:56:07.000+00:00",
        "announcementTitle" : "Venizelou station",
        "announcementBody" : "Venizelou station will remain closed due to maintenance"
    };

    const response = await setAnnouncementAttributes(updatedAnnouncement);
    // console.log('Edit Announcement test:', response);

    t.is(response.status, 404);
    t.is(response.body.message, "Announcement not found");
});

// Test case for an empty announcementID
test('PUT /announcement should return 404 if announcementID is empty', async (t) => {
    const emptyAnnouncementID = {
        "announcementID" : undefined,
        "upload-date" : "2000-01-23T04:56:07.000+00:00",
        "announcementTitle" : "Venizelou station",
        "announcementBody" : "Venizelou station will remain closed due to maintenance"
    };

    const response = await setAnnouncementAttributes(emptyAnnouncementID);
    // console.log('Edit Announcement test:', response);

    t.is(response.status, 404);
    t.is(response.body.message, "Announcement ID is empty");
});

// Test case for a deleted announcement
test('DELETE /announcement/{announcementId} should delete an announcement', async (t) => {
    const deletedAnnouncement = {
        "announcementID" : 154,
        "upload-date" : "2000-01-23T04:56:07.000+00:00",
        "announcementTitle" : "Venizelou station",
        "announcementBody" : "Venizelou station will remain closed due to maintenance"
    };

    const response = await deleteAnnouncementEntity(deletedAnnouncement);

    t.is(response.status, 200);
    t.is(response.message, "Announcement deleted");
});

// Test case for a not found recently deleted announcement
test('DELETE /announcement/{announcementId} should return 404 if announcement not found', async (t) => {
    const deletedAnnouncement = {
        "announcementID" : 155,
        "upload-date" : "2000-01-23T04:56:07.000+00:00",
        "announcementTitle" : "Venizelou station",
        "announcementBody" : "Venizelou station will remain closed due to maintenance"
    };

    const response = await deleteAnnouncementEntity(deletedAnnouncement);

    t.is(response.status, 404);
    t.is(response.body.message, "Announcement not found");
});
