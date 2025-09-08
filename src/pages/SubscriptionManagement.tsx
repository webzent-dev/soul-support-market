import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  CreditCard, 
  Calendar, 
  Check, 
  Download,
  Plus,
  Edit,
  Trash2
} from "lucide-react";
import { Link } from "react-router-dom";

const SubscriptionManagement = () => {
  const [paymentMethods] = useState([
    { id: 1, type: "Visa", last4: "4242", expiry: "12/26", isDefault: true },
    { id: 2, type: "Mastercard", last4: "8888", expiry: "08/25", isDefault: false }
  ]);

  const [billingHistory] = useState([
    { id: 1, date: "2024-03-01", amount: "$497.00", status: "Paid", description: "Lifetime Membership" },
    { id: 2, date: "2024-02-15", amount: "$29.00", status: "Paid", description: "Spotlight Feature - February" },
    { id: 3, date: "2024-01-15", amount: "$29.00", status: "Paid", description: "Spotlight Feature - January" }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/dashboard">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Subscription & Payments</h1>
          <p className="text-muted-foreground">Manage your membership and payment information</p>
        </div>

        <Tabs defaultValue="subscription" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
            <TabsTrigger value="payments">Payment Methods</TabsTrigger>
            <TabsTrigger value="billing">Billing History</TabsTrigger>
          </TabsList>

          {/* Current Subscription */}
          <TabsContent value="subscription" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Membership</CardTitle>
                <CardDescription>Your Winnipeg Healing Connection membership details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-green-800">Lifetime Membership</h3>
                      <p className="text-green-600">Winnipeg Healing Connection</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">Active</Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-green-800">Purchase Date</p>
                      <p className="text-green-700">March 1, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-800">Amount Paid</p>
                      <p className="text-green-700">$497.00 (One-time payment)</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-green-800 mb-2">Lifetime Benefits Include:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 text-green-700">
                        <Check className="h-4 w-4" />
                        <span className="text-sm">Unlimited business listing</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-700">
                        <Check className="h-4 w-4" />
                        <span className="text-sm">Event creation & management</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-700">
                        <Check className="h-4 w-4" />
                        <span className="text-sm">Priority customer support</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-700">
                        <Check className="h-4 w-4" />
                        <span className="text-sm">Community networking access</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-green-600">
                    No recurring charges. Your membership is active for life!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Alternative Plans */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Services</CardTitle>
                <CardDescription>Optional add-ons and features you can purchase</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Business Spotlight</h3>
                        <p className="text-sm text-muted-foreground">
                          Feature your business on the homepage for increased visibility
                        </p>
                        <Badge variant="secondary" className="mt-1">$29/month</Badge>
                      </div>
                      <Button variant="outline">
                        Purchase Spotlight
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Premium Event Promotion</h3>
                        <p className="text-sm text-muted-foreground">
                          Enhanced event listings with featured placement
                        </p>
                        <Badge variant="outline" className="mt-1">Coming Soon</Badge>
                      </div>
                      <Button variant="outline" disabled>
                        Coming Soon
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment Methods */}
          <TabsContent value="payments" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Saved Payment Methods</CardTitle>
                    <CardDescription>Manage your payment methods for future purchases</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Payment Method
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <CreditCard className="h-8 w-8 text-muted-foreground" />
                        <div>
                          <h3 className="font-medium">
                            {method.type} •••• {method.last4}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Expires {method.expiry}
                          </p>
                          {method.isDefault && (
                            <Badge variant="secondary" className="mt-1">Default</Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing History */}
          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>View and download your payment history and invoices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {billingHistory.map((bill) => (
                    <div key={bill.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <h3 className="font-medium">{bill.description}</h3>
                          <p className="text-sm text-muted-foreground">{bill.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-medium">{bill.amount}</p>
                          <Badge 
                            variant={bill.status === "Paid" ? "secondary" : "destructive"}
                            className="text-xs"
                          >
                            {bill.status}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Need help with billing? Contact our support team.
                  </p>
                  <Button variant="outline">Contact Support</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubscriptionManagement;