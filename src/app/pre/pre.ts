export const allPresentations: PresentationType[] = [
    {
        "title": "Why Engineers Hate AWS",
        "description": "Our brain power should be spent on better things.<p><b> Data Science Speaker Club 19th June, 2023.</b></p>",
        "slug": "hate-aws",
        "date": "2023-06-19T00:00:00.000Z",
        "tags": [
            "aws",
            "engineering"
        ],

    },
    {
        "title": "How to unfuck your bundler problems",
        "description": "Nx maybe?",
        "slug": "bundler-problems",
        "date": "Mon Sep 16 2024 16:17:11 GMT+0100",
        tags: [
            "bundler",
            "Nx"
        ]
    }
]

export type PresentationType = {
    title: string;
    description: string;
    slug: string;
    date: string;
    tags: string[];
};
