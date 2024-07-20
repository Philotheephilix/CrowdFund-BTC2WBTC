"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Define types for campaign data
interface Campaign {
  title: string;
  description: string;
  fundingGoal: number;
  raised: number;
  timeLeft: number;
}

// Main Component
export function Component() {
  const [showCampaignDetails, setShowCampaignDetails] = useState<boolean>(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [btcAmount, setBtcAmount] = useState<number>(0);

  const campaigns: Campaign[] = [
    {
      title: "New Eco-Friendly Backpack",
      description: "Help us create a sustainable backpack made from recycled materials.",
      fundingGoal: 5000,
      raised: 2500,
      timeLeft: 30,
    },
    {
      title: "Innovative Smart Home Device",
      description: "Help us bring our cutting-edge smart home device to life.",
      fundingGoal: 10000,
      raised: 7500,
      timeLeft: 45,
    },
    {
      title: "Sustainable Clothing Line",
      description: "Help us launch our new eco-friendly clothing line.",
      fundingGoal: 15000,
      raised: 12000,
      timeLeft: 60,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 text-lg font-bold" prefetch={false}>
          <CoinsIcon className="w-6 h-6" />
          Crowdfund
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Create Campaign
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <SearchIcon className="w-5 h-5" />
                <span className="sr-only">Search</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <FilterIcon className="w-4 h-4" />
                  <span>Filter</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <SearchIcon className="w-4 h-4" />
                  <span>Search</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 bg-muted/40 py-8 px-4 md:px-6">
        <section className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Active Campaigns</h1>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View Dashboard
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign, index) => (
              <Card key={index}>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={225}
                    alt="Campaign Image"
                    className="rounded-t-lg object-cover aspect-video"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <div>
                    <h3 className="text-lg font-bold">{campaign.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {campaign.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Funding Goal</div>
                      <div className="text-primary font-bold">${campaign.fundingGoal.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Raised</div>
                      <div className="text-primary font-bold">${campaign.raised.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Time Left</div>
                      <div className="text-primary font-bold">{campaign.timeLeft} days</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 flex justify-between">
                  <Button
                    onClick={() => {
                      setShowCampaignDetails(true);
                      setSelectedCampaign(campaign);
                    }}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    View Campaign
                  </Button>
                  <Button
                    onClick={() => setBtcAmount(1)}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contribute
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      {showCampaignDetails && selectedCampaign && (
        <Dialog>
          <DialogContent className="sm:max-w-[800px] w-full p-4 md:p-6">
            <div className="grid gap-6">
              <div>
                <img
                  src="/placeholder.svg"
                  width={800}
                  height={450}
                  alt="Campaign Image"
                  className="rounded-t-lg object-cover aspect-video"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{selectedCampaign.title}</h2>
                <p className="text-muted-foreground">{selectedCampaign.description}</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm font-medium">Funding Goal</div>
                    <div className="text-primary font-bold">${selectedCampaign.fundingGoal.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Raised</div>
                    <div className="text-primary font-bold">${selectedCampaign.raised.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Time Left</div>
                    <div className="text-primary font-bold">{selectedCampaign.timeLeft} days</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    onClick={() => setBtcAmount(1)}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contribute
                  </Button>
                  {btcAmount > 0 && <div className="text-muted-foreground">Contribute {btcAmount} BTC</div>}
                </div>
              </div>
            </div>
            <div>
              <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={() => setShowCampaignDetails(false)}>
                <XIcon className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
      <footer className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <p className="text-sm">&copy; 2024 Crowdfund</p>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Contact
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Terms
          </Link>
        </nav>
      </footer>
    </div>
  );
}

// Icon components
const CoinsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="8" cy="8" r="6" />
    <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
    <path d="M7 6h1v4" />
    <path d="m16.71 13.88.7.71-2.82 2.82" />
  </svg>
);

const FilterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);
export default Component;
