import { Card, CardContent } from "@/components/ui/card";

export const QuestionTemplates = () => {
  const questions = [
    {
      title: "Create a business plan",
      description: "for my new startup",
    },
    {
      title: "Recommend a book",
      description: "on machine learning",
    },
    {
      title: "Write technical overview",
      description: "about large language models",
    },
    {
      title: "Generate a summary",
      description: "of the shrek movie",
    },
  ];

  return (
    <div className="flex flex-col sm:grid w-full gap-2 grid-cols-2 grid-rows-2  [&>*:nth-child(even)]:hidden sm:[&>*:nth-child(even)]:block">
      {questions.map((q) => (
        <Card key={q.title} className="cursor-pointer">
          <CardContent className="text-sm flex flex-col justify-center py-3">
            <h3 className="font-medium">{q.title}</h3>
            <p className="text-muted-foreground">{q.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
