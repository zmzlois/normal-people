export const allPresentations:PresentationType[] = [
    {
        "title": "Why Engineers Hate AWS",
        "description": "Our brain power should be spent on better things.",
        "slug": "hate-aws",
        "date": "2023-06-19T00:00:00.000Z",
        "tags": [
            "aws",
            "engineering"
        ],
       
    },
]

export type PresentationType = {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: string[];
};
