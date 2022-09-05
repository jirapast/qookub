# sample data for main branch (do not use in knum)
from uuid import UUID

admins = [
    {
        "id": UUID("ee9335e9-2cf4-11ed-9562-1062e501e6cb"),
        "fullname": "Jira Bun",
        "email": "superadmin@sample.com",
        "password": "555666"
    },
    {
        "id": UUID("fc3dce40-2cf4-11ed-957e-1062e501e6cb"),
        "fullname": "Nara Phong",
        "email": "admin@sample.com",
        "password": "555666"
    },
    {
        "id": UUID("0245e537-2cf5-11ed-b293-1062e501e6cb"),
        "fullname": "Kitin Papaya",
        "email": "user_1@sample.com",
        "password": "555666"
    },
    {
        "id": UUID("0902f111-2cf5-11ed-963c-1062e501e6cb"),
        "fullname": "Yaya Wong",
        "email": "user_2@sample.com",
        "password": "555666"
    },
]

users = [
    {
        "id": UUID("778e49c7-2cf5-11ed-8b03-1062e501e6cb"),
        "card_id": 4444449999999,
        "name": "Bobo",
        "content": ["basic robotics"]
    },
    {
        "id": UUID("811a4d88-2cf5-11ed-a52b-1062e501e6cb"),
        "card_id": 3333399999999,
        "name": "Toy",
        "content": ["bitcoin_101", "basic robotics"]
    },
    {
        "id": UUID("86b0c246-2cf5-11ed-9b61-1062e501e6cb"),
        "card_id": 1111199999999,
        "name": "Steve",
        "content": ["bitcoin_101"]
    },
    {
        "id": UUID("8ceafd80-2cf5-11ed-b989-1062e501e6cb"),
        "card_id": 2222299999999,
        "name": "Luffy",
        "content": []
    },
]

courses = [
    {
        "id": UUID("a50c103c-2d00-11ed-8ca4-1062e501e6cb"),
        "course_name": "bitcoin_101", "rating": 4, "tag": "fintech", "teacher": "dang", "total_enrol": 22,
        "section": [
            {"section_name": "what is money", 
                "chapter": [{"name": "what when why", "url": "https://www.youtube.com/embed/s3NWyh8a5t0"}, {"name": "money origin", "url": "https://www.youtube.com/embed/s3NWyh8a5t0"}]},
            {"section_name": "type of money", 
                "chapter": [{"name": "creatable money", "url": "https://www.youtube.com/embed/s3NWyh8a5t0"}, {"name": "non-creatable money", "url": "https://www.youtube.com/embed/s3NWyh8a5t0"}]},
            {"section_name": "about satoshi", 
                "chapter": [{"name": "who is who", "url": "https://www.youtube.com/embed/s3NWyh8a5t0"}, {"name": "satoshi nakamoto", "url": "https://www.youtube.com/embed/s3NWyh8a5t0"}]},
    ]},
    {
        "id": UUID("b9f74a19-2d00-11ed-9206-1062e501e6cb"),
        "course_name": "basic robotics", "rating": 4.5, "tag": "hardware", "teacher": "wanchai", "total_enrol": 11,
        "section": [
            {"section_name": "machatronics", 
                "chapter": [{"name": "electrical machine", "url": "https://www.youtube.com/embed/cPOtULagNnI"}, {"name": "machanical machine", "url": "https://www.youtube.com/embed/cPOtULagNnI"}]},
            {"section_name": "the modern robot", 
                "chapter": [{"name": "robot car", "url": "https://www.youtube.com/embed/cPOtULagNnI"}, {"name": "3d printer", "url": "https://www.youtube.com/embed/cPOtULagNnI"}]},
    ]},
]

tags = ["fintech", "hardware", "chess"]


