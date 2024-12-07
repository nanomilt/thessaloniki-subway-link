const http = require('http');
const test = require('ava');
const listen = require("test-listen");
const got = require('got');
const app = require("../index.js");

const { announcementEntity } = require("../service/AnnouncementService.js");
const { getAnnouncementEntity } = require("../service/AnnouncementService.js");
const { setAnnouncementAttributes } = require("../service/AnnouncementService.js");
const { deleteAnnouncementEntity } = require("../service/AnnouncementService.js");

test.before(async (t) => {
	t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    // const server = t.context.server.listen();
    // const { port } = server.address();
	t.context.got = got.extend({ 
        responseType: "json", 
        prefixUrl: t.context.prefixUrl,
    });
});

test.after.always((t) => {
	t.context.server.close();
});


test('GET /announcement/{announcementId} should return an announcement', async (t) => {
    const AnnouncementEntity = await getAnnouncementEntity(154); // 154: AnnouncementID TODO: generateTestID function
    
    console.log(AnnouncementEntity);

    t.is(AnnouncementEntity.status, 200);
    t.truthy(AnnouncementEntity.body.announcementID == 154);
    t.truthy(AnnouncementEntity.body.announcementTitle == "Venizelou station");
    t.truthy(AnnouncementEntity.body.announcementBody == "Venizelou station will remain closed due to maintenance");
});

test('GET /announcement/{announcementId} should return 404 if announcement not found', async (t) => {
    const announcementNotFound = await getAnnouncementEntity(155); // 155: AnnouncementID TODO: generateTestID function

    console.log("Announcement not found:", announcementNotFound);

    t.is(announcementNotFound.status, 404);
    t.is(announcementNotFound.body.message, "Announcement not found");
});

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

test('POST /announcement should handle empty announcement', async (t) => {
    const emptyAnnouncement = {};
    
    const response = await announcementEntity(emptyAnnouncement);
    console.log('Empty Announcement test:', response);

    t.is(response, undefined);
});

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
