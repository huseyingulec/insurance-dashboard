"use client";

import { useState } from "react";
import { type Claim, type Customer, getCustomerById } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
 import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

type ClaimsTableProps = {
  claims: Claim[];
};

export function ClaimsTable({ claims }: ClaimsTableProps) {
  const [selectedClaim, setSelectedClaim] = useState<Claim | null>(null);
  const [customer, setCustomer] = useState<Customer | null>(null);

  const handleViewClaim = (claim: Claim) => {
    setSelectedClaim(claim);
    setCustomer(getCustomerById(claim.customerId) || null);
  };

  const getStatusBadge = (status: Claim["status"]) => {
    switch (status) {
      case "Approved":
        return <Badge className="bg-green-500">Approved</Badge>;
      case "Rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      case "Under Review":
        return (
          <Badge
            variant="outline"
            className="border-yellow-500 text-yellow-500"
          >
            Under Review
          </Badge>
        );
      default:
        return <Badge variant="secondary">Pending</Badge>;
    }
  };

  const getAIEvaluationIcon = (evaluation: Claim["aiEvaluation"]) => {
    switch (evaluation) {
      case "Likely Valid":
        return <CheckCircle className="h-8 w-8 text-green-500" />;
      case "Requires Review":
        return <AlertTriangle className="h-8 w-8 text-yellow-500" />;
      case "Likely Fraudulent":
        return <XCircle className="h-8 w-8 text-red-500" />;
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Claim ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Region</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {claims.map(claim => (
            <TableRow
              key={claim.id}
              className="cursor-pointer hover:bg-muted/50"
              onClick={() => handleViewClaim(claim)}
            >
              <TableCell className="font-medium">{claim.id}</TableCell>
              <TableCell>{claim.customerName}</TableCell>
              <TableCell>{claim.region}</TableCell>
              <TableCell>{claim.date}</TableCell>
              <TableCell>€{claim.amount.toLocaleString()}</TableCell>
              <TableCell>{getStatusBadge(claim.status)}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={e => {
                    e.stopPropagation();
                    handleViewClaim(claim);
                  }}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog
        open={!!selectedClaim}
        onOpenChange={open => !open && setSelectedClaim(null)}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Claim {selectedClaim?.id}</DialogTitle>
            <DialogDescription>
              Submitted on {selectedClaim?.date}
            </DialogDescription>
          </DialogHeader>

          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Customer Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Customer ID
                </h4>
                <p className="text-lg font-semibold">{customer?.id}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Name
                </h4>
                <p className="text-lg font-semibold">{customer?.name}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Age
                </h4>
                <p className="text-lg">{customer?.age} years</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Email
                </h4>
                <p className="text-lg">{customer?.email}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Phone
                </h4>
                <p className="text-lg">{customer?.phone}</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Vehicle Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Brand
                    </h4>
                    <p className="text-lg">{customer?.carBrand}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Model
                    </h4>
                    <p className="text-lg">{customer?.carModel}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Year
                    </h4>
                    <p className="text-lg">{customer?.carYear}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Claim Information */}
          <div className="space-y-4 mt-8">
            <h3 className="text-lg font-bold">Claim Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Claim ID
                </h4>
                <p className="text-lg font-semibold">{selectedClaim?.id}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Status
                </h4>
                <p className="text-lg">
                  {selectedClaim && getStatusBadge(selectedClaim.status)}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Amount
                </h4>
                <p className="text-lg font-semibold">
                  €{selectedClaim?.amount.toLocaleString()}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">
                  Region
                </h4>
                <p className="text-lg">{selectedClaim?.region}</p>
              </div>
              <div className="col-span-2">
                <h4 className="text-sm font-medium text-muted-foreground">
                  Description
                </h4>
                <p className="text-lg">{selectedClaim?.description}</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>AI Model Evaluation</CardTitle>
                <CardDescription>
                  Automated risk assessment of this claim
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  {selectedClaim &&
                    getAIEvaluationIcon(selectedClaim.aiEvaluation)}
                  <div>
                    <h3 className="text-xl font-bold">
                      {selectedClaim?.aiEvaluation}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedClaim?.aiEvaluation === "Likely Valid" &&
                        "Our AI model indicates this claim is likely legitimate."}
                      {selectedClaim?.aiEvaluation === "Requires Review" &&
                        "Our AI model suggests this claim needs human review."}
                      {selectedClaim?.aiEvaluation === "Likely Fraudulent" &&
                        "Our AI model has detected potential fraud indicators."}
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="text-xs text-muted-foreground">
                AI evaluation is based on historical patterns and should be
                verified by an agent.
              </CardFooter>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
