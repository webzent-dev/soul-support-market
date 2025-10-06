import { CheckCircle, Home, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="rounded-full bg-green-100 dark:bg-green-900/20 p-6">
              <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <CardTitle className="text-3xl">Welcome to Our Community!</CardTitle>
          <CardDescription className="text-lg">
            Your membership has been successfully activated
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-secondary/50 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-lg">What's Next?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Complete your business profile to get discovered by the community
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Create and manage your events to engage with members
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Purchase spotlight to feature your business on the homepage
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Connect with other wellness professionals in your area
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              A confirmation email has been sent to your registered email address with your membership details and receipt.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild className="flex-1" size="lg">
              <Link to="/dashboard">
                <User className="mr-2 h-5 w-5" />
                Go to Dashboard
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1" size="lg">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Return Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYou;
