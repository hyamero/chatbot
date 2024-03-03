import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const QuestionTemplates = ({
  setInput,
}: {
  setInput: React.Dispatch<React.SetStateAction<string>>;
}) => {
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
    <div className="flex flex-col gap-20">
      <Card className="w-3/4 mx-auto">
        <CardHeader className="font-medium">Welcome!</CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          Get started by selecting one of the templates below or type your
          message in the input field.
        </CardContent>
      </Card>

      <div className="flex flex-col sm:grid w-full gap-2 grid-cols-2 grid-rows-2  [&>*:nth-child(even)]:hidden sm:[&>*:nth-child(even)]:block">
        {questions.map((q) => (
          <Card
            key={q.title}
            className="cursor-pointer"
            onClick={() => setInput(q.title + " " + q.description)}
          >
            <CardContent className="text-sm flex flex-col justify-center py-3">
              <h3 className="font-medium">{q.title}</h3>
              <p className="text-muted-foreground">{q.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
