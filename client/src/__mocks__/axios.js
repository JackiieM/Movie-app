const mockResponse = {
    data: {
        results: [
            {
                title: "Harry Potter and the Philosopher's Stone",
                poster_path: "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
                release_date: "2001-11-16",
                overview: "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame."
            },
            {
                title: "The Magic Touch of Harry Potter",
                poster_path: "/gwFARNYf1Odv3E8ESVHyikXmMIY.jpg",
                release_date: "2004-06-11",
                overview: "A 2004 documentary on the first three “Harry Potter” films detailing the behind-the-scenes journey of making them."
            }
        ]
    }
};

export default {
    get: jest.fn().mockResolvedValue()
}