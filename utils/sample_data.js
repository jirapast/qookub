const data = {
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
        {course_name: "bitcoin_101", tag: "fintech", teacher: "dang", section: [
            {section_name: "what is money", chapter: ["what when why", "money origin"]},
            {section_name: "type of money", chapter: ["creatable money", "non-creatable money"]},
            {section_name: "about satoshi", chapter: ["who is who", "satoshi nakamoto"]},
        ]},
        {course_name: "basic robotics", teacher: "wanchai", section: [
            {section_name: "machatronics", chapter: ["electrical machine", "machanical machine"]},
            {section_name: "the modern robot", chapter: ["robot car", "3d printer"]},
        ]},
    ],
    tags: ["fintech", "robotics", "chess"]
}

// metadata
// to config uuid as id 
// teacher.course_list => validated course 
// teacher.pending_list => validating course that waiting for validator and then for earnest money (withdrawable when it over than minimum of student enroll)
// student.course_list => purchased course
// student.pending_list => purchasing course
export default data