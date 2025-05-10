import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  generateCarBrandData,
  generateRegionData,
  getRegionStats,
} from "@/lib/data";
import ItalyMap from "@/components/italy-map";
import { RegionBarChart } from "@/components/region-bar-chart";
import { CarBrandChart } from "@/components/car-brand-chart";
import italyImg from "../public/claims_per_province.jpg";
import averageClaimImg from "../public/average-claim.png";

export default function InsightsPage() {
  const regionData = generateRegionData();
  const carBrandData = generateCarBrandData();
  const stats = getRegionStats();

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">
          Insights Dashboard
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Claims by year
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.totalClaims.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Across all regions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Claim Amount
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              €{stats.avgAmount.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Per insurance claim</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Most Claimed Region
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.topRegion}</div>
            <p className="text-xs text-muted-foreground">
              Highest number of claims
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="map" className="space-y-4">
        <TabsList>
          <TabsTrigger value="map">Number of claims</TabsTrigger>
          <TabsTrigger value="regions">Average claim amount</TabsTrigger>
          <TabsTrigger value="cars">Claims by Car Brand</TabsTrigger>
        </TabsList>
        <TabsContent value="map" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Number of claims per province</CardTitle>
              <CardDescription>
                Geographic distribution of insurance claims across Italy
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center p-6">
              <ItalyMap imageUrl={italyImg.src} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="regions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Average claim amount per province</CardTitle>
              <CardDescription>
                Geographic distribution of insurance claims across Italy
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center p-6">
              <ItalyMap imageUrl={averageClaimImg.src} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="cars" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Claims by Car Brand</CardTitle>
              <CardDescription>
                Distribution of claims by customer car brand
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <CarBrandChart data={carBrandData} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
