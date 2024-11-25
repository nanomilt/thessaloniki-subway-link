// exports.getAnnouncementEntity = function(announcementId) {
//     return new Promise(function(resolve, reject) {
//       var examples = {};
//       examples['application/json'] = {
//     "announcement-id" : 154,
//     "upload-date" : "2000-01-23T04:56:07.000+00:00",
//     "title" : "Venizelou station",
//     "body" : "Venizelou station will remain closed due to maintenance"
//   };
//       if (Object.keys(examples).length > 0) {
//         resolve(examples[Object.keys(examples)[0]]);
//       } else {
//         resolve();
//       }
//     });
//   }
const http = require('http');
const test = require('ava');
const listen = require("test-listen");
const got = require('got');
const app = require("../index.js");

const { getAnnouncementEntity } = require("../service/AnnouncementService.js");

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
    
    t.is(AnnouncementEntity.status, 200);
    t.truthy(AnnouncementEntity.body.announcementID == 154);
    t.truthy(AnnouncementEntity.body.title == "Venizelou station");
    t.truthy(AnnouncementEntity.body.body == "Venizelou station will remain closed due to maintenance");
});
