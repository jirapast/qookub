const data = {
    admin: [
        {name: "admin1", email: "admin1@email.com", password: "666666", role: "super_admin"},
        {name: "admin2", email: "admin2@email.com", password: "666666", role: "admin"},
    ],
    students: [
        {name: "jojo", email: "jojo@example.com", password: "123456", role: "student", course_list: ["bitcoin 101", "basic robotics", "how to sushi"], pending_list: [{ref_id: 1, course_name: "chess for newbies"}, {ref_id: 2, course_name: "unseen africa"}]},
        {name: "yoyo", email: "yoyo@example.com", password: "123456", role: "student", course_list: ["bitcoin 101"], pending_list: []},
        {name: "coco", email: "coco@example.com", password: "123456", role: "student", course_list: ["basic robotics"], pending_list: []},
    ],
    teachers: [
        {name: "dang", email: "dang@example.com", password: "123456", role: "teacher", course_list: ["bitcoin 101", "dapp 101", "unseen africa", "chess for newbies"], pending_list: [{ref_id: 1, course_name:"blockchain for everyone"}]},
        {name: "wanchai", email: "wanchai@example.com", password: "123456", role: "teacher", course_list: ["basic robotics", "how to sushi"], pending_list: []},
    ],
    courses: [
        {course_name: "bitcoin_101", rating: 4, tag: "fintech", teacher: "dang", total_enrol: 22,
          section: [
            {section_name: "what is money", chapter: [{name: "what when why", url: "https://www.youtube.com/embed/s3NWyh8a5t0"}, {name: "money origin", url: "https://www.youtube.com/embed/s3NWyh8a5t0"}]},
            {section_name: "type of money", chapter: [{name: "creatable money", url: "https://www.youtube.com/embed/s3NWyh8a5t0"}, {name: "non-creatable money", url: "https://www.youtube.com/embed/s3NWyh8a5t0"}]},
            {section_name: "about satoshi", chapter: [{name: "who is who", url: "https://www.youtube.com/embed/s3NWyh8a5t0"}, {name: "satoshi nakamoto", url: "https://www.youtube.com/embed/s3NWyh8a5t0"}]},
        ]},
        {course_name: "basic robotics", rating: 4.5, tag: "hardware", teacher: "wanchai", total_enrol: 11,
          section: [
            {section_name: "machatronics", chapter: [{name: "electrical machine", url: "https://www.youtube.com/embed/cPOtULagNnI"}, {name: "machanical machine", url: "https://www.youtube.com/embed/cPOtULagNnI"}]},
            {section_name: "the modern robot", chapter: [{name: "robot car", url: "https://www.youtube.com/embed/cPOtULagNnI"}, {name: "3d printer", url: "https://www.youtube.com/embed/cPOtULagNnI"}]},
        ]},
    ],
    tags: ["fintech", "hardware", "chess"]
}

// metadata
// to config uuid as id 
// teacher.course_list => validated course 
// teacher.pending_list => validating course that waiting for validator and then for earnest money (being withdrawable when it over than minimum of student enroll)
// student.course_list => purchased course
// student.pending_list => purchasing course
// student.pending_list.ref_id => paypal refference id

export default data
