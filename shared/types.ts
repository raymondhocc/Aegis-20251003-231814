export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
export enum PolicyStatus {
  Active = "Active",
  Pending = "Pending",
  Expired = "Expired",
  Cancelled = "Cancelled",
}
export enum ClaimStatus {
  Open = "Open",
  Approved = "Approved",
  Rejected = "Rejected",
  Closed = "Closed",
}
export enum InsuranceClass {
  Motor = "Motor",
  Fire = "Fire",
  MarineCargo = "Marine Cargo",
  EmployeeCompensation = "Employee Compensation",
  Travel = "Travel",
  Medical = "Medical",
}
export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  joinDate: string;
}
export interface Policy {
  id: string;
  policyNumber: string;
  clientName: string;
  clientId: string;
  insuranceClass: InsuranceClass;
  premium: number;
  startDate: string;
  endDate: string;
  status: PolicyStatus;
  details: Record<string, any>;
}
export interface Claim {
  id: string;
  claimNumber: string;
  policyNumber: string;
  policyId: string;
  clientName: string;
  clientId: string;
  claimDate: string;
  amount: number;
  status: ClaimStatus;
  description: string;
}