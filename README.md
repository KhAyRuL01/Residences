    # Residences
    Software development lab
    This is a restful application which gives users residential inforamtion of Rajshahi university.

    get localhost:3333/residences/halls


    response:

            [
                {
                    "_id": "103",
                    "name": "Nawab Abdul Latif Hall"
                },
                {
                    "_id": "104",
                    "name": "Syed Amer Ali Hall"
                },
                {
                    "_id": "105",
                    "name": "Shaheed Shamsuzzoha Hall"
                },
                {
                    "_id": "108",
                    "name": "Madar Bux Hall"
                },
                {
                    "_id": "109",
                    "name": "Shaheed Suhrawardy Hall"
                },
                {
                    "_id": "110",
                    "name": "Shaheed Ziaur Rahman Hall"
                },
                {
                    "_id": "102",
                    "name": "Shah Mukhdum Hall"
                },
                {
                "_id": "106",
                "name": "Shaheed Habibur Rahman Hall"
                },
                {
                    "_id": "120",
                    "name": "Mannujan Hall"
                },
                {
                    "_id": "121",
                    "name": "Rokeya Hall"
                },
                {
                    "_id": "122",
                    "name": "Tapashi Rabeya Hall"
                },
                {
                    "_id": "124",
                    "name": "Rahamatunnesa Hall"
                },
                {
                    "_id": "125",
                    "name": "Bangmata Seikh Fazilatunnesa Hall"
                }
            ]

    You can create query by using _id.
    Example: 
    get localhost:3333/residences/halls?_id=106
    response:
                {
                        "_id": "106",
                        "name": "Shaheed Habibur Rahman Hall"
                }

    post localhost:3333/residences/halls
    Request body:
                {
                        "_id": "106",
                        "name": "Shaheed Habibur Rahman Hall"
                }
                
    Response:
            Inserted.
    
    If you want to delete somethings from halls,
    use 
    delete localhost:3333/residences/halls
    
    request body:
                {
                        "_id": "106",
                        "name": "Shaheed Habibur Rahman Hall"
                }
                
    Response:
            Deleted
            
    You want to update somethings from halls,
    use 
    delete localhost:3333/residences/halls
    
    request body:
                {
                        "_id": "106",
                        "name": "Shaheed Habibur Rahman Hall"
                }
                
    Response:
            updated       
    
            
    You can find out details information of a hall using
    get localhost:3333/residences/halls/details?_id=106
    response:
            [
                {
                    "_id": "106",
                    "Name": "Shaheed Habibur Rahman Hall",
                    "Provost": "Dr.Abdur Rahman",
                    "Tel_no": "711200",
                    "Number_of_House_Tutor": "2",
                    "Number_of_Rooms": "310",
                    "Number_of_seat": "540",
                    "Residential_Students": "540",
                    "Seat Rent": {
                        "Seat rent for room": "115",
                        "Rent for dormitory": "65"
                    },
                    "Number_of_Reading_Room": "1",
                    "Entertainment": "Sports, Indoor games, Cultural Events, Annual Functions, Debating, Discussion Ceremony",
                    "Mosque": "1",
                    "Hall_Dining": {
                        "Lunch_Meal": "24 tk",
                        "Dinner_Meal": "18 tk"
                    },
                    "Office Opens At": "9 AM",
                    "Office_Close_At": "4.30 PM"
                }
            ]
    You can update any information of halls.Just give id and the information you want to delete.
    example:
    delete localhost:3333/residences/halls
    
    request body:
                {
                        "_id": "106",
                        "Provost": "Dr.Abdur Rahman"
                }
                
    Response:
            updated 

    You can list halls for male students and halls for female students
    using 
    get localhost:3333/residences/halls/male and
    get localhost:3333/residences/halls/female
