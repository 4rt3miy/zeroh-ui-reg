import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardPreview() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Automation insights</CardTitle>
        <CardDescription>Track adoption and usage metrics across your teams.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• 32 workflows automated this month</p>
          <p>• 87% build time reduction</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="secondary">View dashboard</Button>
      </CardFooter>
    </Card>
  );
}

