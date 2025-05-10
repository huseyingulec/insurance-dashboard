export type Region = {
  id: string;
  name: string;
  claimCount: number;
  totalAmount: number;
};

export type CarBrand = {
  brand: string;
  count: number;
};

export type Claim = {
  id: string;
  customerId: string;
  customerName: string;
  region: string;
  province: string;
  date: string;
  amount: number;
  status: "Pending" | "Approved" | "Rejected" | "Under Review";
  description: string;
  aiEvaluation: "Likely Valid" | "Requires Review" | "Likely Fraudulent";
  heatmap?: any; // Optional field for heatmap image URL
  chart?: ChartData[]; // Optional chart property
};

export type Customer = {
  id: string;
  name: string;
  age: number;
  carBrand: string;
  carModel: string;
  carYear: number;
  email: string;
  phone: string;
};
type ChartData = {
  amount: number;
  count: number;
};

// Dummy data for regions
const dummyRegions: Region[] = [
  { id: "R1", name: "Lombardy", claimCount: 150, totalAmount: 750000 },
  { id: "R2", name: "Lazio", claimCount: 120, totalAmount: 600000 },
  { id: "R3", name: "Campania", claimCount: 100, totalAmount: 500000 },
  { id: "R4", name: "Sicily", claimCount: 80, totalAmount: 400000 },
  { id: "R5", name: "Veneto", claimCount: 90, totalAmount: 450000 },
];

// Dummy data for car brands
const dummyCarBrands: CarBrand[] = [
  { brand: "Fiat", count: 50 },
  { brand: "Volkswagen", count: 40 },
  { brand: "BMW", count: 30 },
  { brand: "Mercedes", count: 25 },
  { brand: "Audi", count: 20 },
];

// Dummy data for claims
const dummyClaims: Claim[] = [
  {
    id: "CL001",
    customerId: "C001",
    customerName: "Mario Rossi",
    region: "Lombardy",
    province: "Milano",
    date: "2025-05-01",
    amount: 5000,
    status: "Approved",
    description: "Car accident on highway",
    aiEvaluation: "Likely Valid",
    heatmap: "/public/heat-map-fiat-500.png",
    chart: [
      { amount: 500.0, count: 36 },
      { amount: 1500.0, count: 51 },
      { amount: 2500.0, count: 45 },
      { amount: 3500.0, count: 12 },
      { amount: 4500.0, count: 2 },
      { amount: 5500.0, count: 3 },
      { amount: 6500.0, count: 1 },
      { amount: 7500.0, count: 0 },
      { amount: 8500.0, count: 1 },
    ],
  },
  {
    id: "CL002",
    customerId: "C002",
    customerName: "Luigi Bianchi",
    region: "Lazio",
    province: "Roma",
    date: "2025-04-15",
    amount: 3000,
    status: "Pending",
    description: "Damage from hailstorm",
    aiEvaluation: "Requires Review",
    heatmap: "/public/heat-golf.png",
    chart: [
      { amount: 100.0, count: 3 },
      { amount: 300.0, count: 3 },
      { amount: 500.0, count: 13 },
      { amount: 700.0, count: 21 },
      { amount: 900.0, count: 1 },
      { amount: 1100.0, count: 1 },
    ],
  },
  {
    id: "CL003",
    customerId: "C003",
    customerName: "Giovanni Ferrari",
    region: "Piedmont",
    province: "Torino",
    date: "2025-03-20",
    amount: 7000,
    status: "Rejected",
    description: "Theft from parking lot",
    aiEvaluation: "Likely Fraudulent",
    heatmap: "/public/heat-map-focus.png",
    chart: [
      { amount: 500.0, count: 17 },
      { amount: 1500.0, count: 18 },
      { amount: 2500.0, count: 30 },
      { amount: 3500.0, count: 8 },
      { amount: 4500.0, count: 4 },
      { amount: 5500.0, count: 2 },
      { amount: 6500.0, count: 3 },
      { amount: 7500.0, count: 2 },
    ],
  },
];

// Dummy data for customers
const dummyCustomers: Customer[] = [
  {
    id: "C001",
    name: "Mario Rossi",
    age: 50,
    carBrand: "Fiat",
    carModel: "500",
    carYear: 2020,
    email: "mario.rossi@example.com",
    phone: "+39 300 1234567",
  },
  {
    id: "C002",
    name: "Luigi Bianchi",
    age: 29,
    carBrand: "Volkswagen",
    carModel: "Golf",
    carYear: 2018,
    email: "luigi.bianchi@example.com",
    phone: "+39 300 2345678",
  },
  {
    id: "C003",
    name: "Giovanni Ferrari",
    age: 38,
    carBrand: "Ford",
    carModel: "Focus",
    carYear: 2021,
    email: "giovanni.ferrari@example.com",
    phone: "+39 300 3456789",
  },
];

const dummychartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

// Export dummy data
export function generateRegionData(): Region[] {
  return dummyRegions;
}

export function generateCarBrandData(): CarBrand[] {
  return dummyCarBrands;
}

export function generateChartData(): any[] {
  return dummychartData;
}

export function generateClaims(): Claim[] {
  return dummyClaims;
}

export function getCustomerById(id: string): Customer | undefined {
  return dummyCustomers.find(customer => customer.id === id);
}

export function getRegionStats(): {
  totalClaims: number;
  avgAmount: number;
  topRegion: string;
} {
  const totalClaims = dummyRegions.reduce((sum, r) => sum + r.claimCount, 0);
  const totalAmount = dummyRegions.reduce((sum, r) => sum + r.totalAmount, 0);
  const topRegion = dummyRegions.reduce((max, r) =>
    r.claimCount > max.claimCount ? r : max
  ).name;

  return {
    totalClaims,
    avgAmount: Math.round(totalAmount / totalClaims),
    topRegion,
  };
}
