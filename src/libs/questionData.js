const data = [
    {
        title: "What is your name?",
        index: 1,
        type: "dropdown",
        dropdown: ["Elliott S", "Toby A", "Kayla G"],
    },
    {
        title: "What is your cohort?",
        index: 2,
        type: "dropdown",
        dropdown: [1, 2, 3, 4, 5],
    },
    {
        title: "What day is the feedback for?*",
        index: 3,
        type: "timeInput",
    },
    {
        title: "What is your feedback for the day?",
        index: 4,
        type: "input",
    },
    {
        title: "How would you rate the workshop lectures?",
        index: 5,
        type: "rating",
    },
    {
        title: "How would you rate the guest lectures?",
        index: 6,
        type: "rating",
    },
    { title: "How would you rate your mood?", index: 7, type: "rating" },
    {
        title: "Who would you vote for Bootcamper of The Week?",
        index: 8,
        type: "dropdown",
        dropdown: ["Elliott S", "Toby A", "Kayla G"],
    },
];

const anonData = [
    {
        title: "What day is the anonymous feedback for?",
        index: 1,
    },
    {
        title: "What is your anonymous feedback for the day?",
        index: 2,
    },
];

export { data, anonData };
