import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Mail, Clock, CheckCircle2, XCircle } from "lucide-react";

interface EmailThread {
  id: number;
  subject: string;
  sentAt: string;
  status: "delivered" | "opened" | "failed";
}

interface Recipient {
  id: number;
  name: string;
  email: string;
  threads: EmailThread[];
}

const Tracking = () => {
  const [selectedRecipient, setSelectedRecipient] = useState<Recipient | null>(null);
  const [recipients] = useState<Recipient[]>([]);

  const getStatusIcon = (status: EmailThread["status"]) => {
    switch (status) {
      case "delivered":
        return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case "opened":
        return <Mail className="w-4 h-4 text-accent" />;
      case "failed":
        return <XCircle className="w-4 h-4 text-red-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Email Tracking</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 p-6 backdrop-blur-sm bg-white/80">
          <h2 className="text-lg font-semibold mb-4">Recipients</h2>
          <div className="space-y-4">
            {recipients.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No recipients yet</p>
            ) : (
              recipients.map((recipient) => (
                <button
                  key={recipient.id}
                  onClick={() => setSelectedRecipient(recipient)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedRecipient?.id === recipient.id
                      ? "bg-accent/10 text-accent"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className="font-medium">{recipient.name}</div>
                  <div className="text-sm text-gray-500">{recipient.email}</div>
                </button>
              ))
            )}
          </div>
        </Card>

        <Card className="col-span-1 md:col-span-2 p-6 backdrop-blur-sm bg-white/80">
          <h2 className="text-lg font-semibold mb-4">
            {selectedRecipient ? "Email Threads" : "Select a recipient"}
          </h2>
          {selectedRecipient ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Sent At</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedRecipient.threads.map((thread) => (
                  <TableRow key={thread.id}>
                    <TableCell className="font-medium">{thread.subject}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-gray-400" />
                        {thread.sentAt}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {getStatusIcon(thread.status)}
                        <span className="ml-2 capitalize">{thread.status}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8 text-gray-500">
              Select a recipient to view their email threads
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Tracking;