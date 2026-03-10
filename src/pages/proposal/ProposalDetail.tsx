import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Check,
  Download,
  Shield,
  Zap,
  Wifi,
  CheckCircle,
  AlertCircle,
  Building2,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// Radio indicator component (standalone, no RadioGroup wrapper needed)
const RadioIndicator = ({ checked, className = "" }: { checked: boolean; className?: string }) => (
  <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${checked ? "border-primary" : "border-muted-foreground/40"} ${className}`}>
    {checked && <div className="h-2 w-2 rounded-full bg-primary" />}
  </div>
);
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Demo data
const DEMO_CUSTOMER = {
  name: "Dragos Rimis",
  company: "Diversitech International",
  address: "Unit 2, Thane Road, Nottingham, NG7 2AA",
};

const CONNECTIVITY_OPTIONS = [
  {
    id: "starlink-basic",
    name: "Starlink Installation",
    installationCost: 950.0,
    monthlyCost: null,
    description: "One-time satellite installation",
  },
  {
    id: "starlink-backup",
    name: "Starlink Backup",
    installationCost: 1500.0,
    monthlyCost: 50.0,
    description: "Redundancy and failover capability",
  },
  {
    id: "integra-business",
    name: "Integra Business Connectivity - Multi 4G/5G (Up to 250Mbps)",
    installationCost: 2200.0,
    monthlyCost: 120.0,
    description: "Multi-network bonding for reliability",
    recommended: true,
  },
  {
    id: "integra-ultrafast",
    name: "Integra Ultrafast Multi-Network (Up to 400Mbps)",
    installationCost: 2900.0,
    monthlyCost: 160.0,
    description: "Premium high-speed connectivity",
  },
];

const WIFI_ADDONS = [
  {
    id: "wifi-mesh",
    name: "WiFi Mesh Access Point",
    installationCost: 0,
    monthlyCost: 0,
    oneOffCost: 350.0,
  },
];

interface OrderSummary {
  selectedConnectivity: string | null;
  wifiMeshIncluded: boolean;
  multiSiteQuantity: number;
  multiSiteEnabled: boolean;
}

interface CustomerFormData {
  customerName: string;
  companyName?: string;
  companyRegistration?: string;
  buildingNumber: string;
  street: string;
  city: string;
  postcode: string;
  phone: string;
  email: string;
  sameAddress: boolean;
  installBuildingNumber?: string;
  installStreet?: string;
  installCity?: string;
  installPostcode?: string;
  landlordName?: string;
  landlordPhone?: string;
  landlordEmail?: string;
  installContactName: string;
  installContactPhone: string;
  installContactEmail: string;
  techContactName: string;
  techContactPhone: string;
  techContactEmail: string;
  antennaAgreed: boolean;
  termsAgreed: boolean;
  signatureName: string;
  signatureTitle: string;
  signatureCompany: string;
}

const customerFormSchema = z.object({
  customerName: z.string().min(2, "Customer name is required"),
  companyName: z.string().optional(),
  companyRegistration: z.string().optional(),
  buildingNumber: z.string().min(1, "Building number is required"),
  street: z.string().min(3, "Street address is required"),
  city: z.string().min(2, "City is required"),
  postcode: z.string().min(3, "Postcode is required"),
  phone: z.string().regex(/^\+?[0-9\s\-()]+$/, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  sameAddress: z.boolean(),
  installBuildingNumber: z.string().optional(),
  installStreet: z.string().optional(),
  installCity: z.string().optional(),
  installPostcode: z.string().optional(),
  landlordName: z.string().optional(),
  landlordPhone: z.string().optional(),
  landlordEmail: z.string().email().optional().or(z.literal("")),
  installContactName: z.string().min(2, "Installation contact name required"),
  installContactPhone: z.string().regex(/^\+?[0-9\s\-()]+$/, "Valid phone required"),
  installContactEmail: z.string().email("Valid email required"),
  techContactName: z.string().min(2, "Technical contact name required"),
  techContactPhone: z.string().regex(/^\+?[0-9\s\-()]+$/, "Valid phone required"),
  techContactEmail: z.string().email("Valid email required"),
  antennaAgreed: z.boolean().refine((val) => val === true, {
    message: "You must agree to antenna installation",
  }),
  termsAgreed: z.boolean().refine((val) => val === true, {
    message: "You must agree to terms and conditions",
  }),
  signatureName: z.string().min(2, "Name is required"),
  signatureTitle: z.string().min(2, "Title is required"),
  signatureCompany: z.string().min(2, "Company is required"),
});

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProposalDetail() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    selectedConnectivity: "integra-business",
    wifiMeshIncluded: false,
    multiSiteQuantity: 0,
    multiSiteEnabled: false,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(customerFormSchema),
    defaultValues: {
      customerName: DEMO_CUSTOMER.name,
      companyName: DEMO_CUSTOMER.company,
      buildingNumber: "Unit 2",
      street: "Thane Road",
      city: "Nottingham",
      postcode: "NG7 2AA",
      sameAddress: true,
      antennaAgreed: false,
      termsAgreed: false,
      signatureTitle: "",
      signatureCompany: DEMO_CUSTOMER.company,
    },
  });

  const sameAddress = watch("sameAddress");

  // Calculate totals
  const selectedOption = CONNECTIVITY_OPTIONS.find(
    (opt) => opt.id === orderSummary.selectedConnectivity
  );

  const installationCost = selectedOption?.installationCost ?? 0;
  const monthlyCost = selectedOption?.monthlyCost ?? 0;
  const wifiCost = orderSummary.wifiMeshIncluded ? WIFI_ADDONS[0].oneOffCost : 0;
  const multiSiteCost = orderSummary.multiSiteEnabled
    ? 250 + orderSummary.multiSiteQuantity * 150
    : 0;

  const subtotal = installationCost + wifiCost + multiSiteCost;
  const vat = subtotal * 0.2;
  const total = subtotal + vat;

  const monthlyTotal = monthlyCost;

  const onSubmit = (data: CustomerFormData) => {
    toast({
      title: "Proposal Accepted",
      description: "Your proposal has been submitted. A Stripe payment link will be sent to your email.",
    });
  };

  return (
    <div className="bg-background text-foreground">
      {/* Print styles */}
      <style>{`
        @media print {
          body { background: white; color: black; }
          .no-print { display: none; }
          .bg-background { background: white; }
          .text-foreground { color: black; }
          button { display: none; }
          input, textarea { border: 1px solid black; }
        }
      `}</style>

      {/* Proposal Header */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        className="sticky top-0 z-50 bg-white shadow-sm border-b"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-medium text-foreground">Customer Proposal</h1>
              <p className="text-muted-foreground text-sm">Integra Networks Limited</p>
            </div>
            <Badge variant="secondary" className="no-print">
              <CheckCircle className="w-4 h-4 mr-2" />
              Draft
            </Badge>
          </div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Company & Proposal Info */}
        <motion.section variants={fadeUpVariant} initial="hidden" animate="visible">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
                Integra Networks
              </h2>
              <div className="space-y-2 text-sm">
                <p className="font-semibold">Integra Networks Limited</p>
                <p className="text-muted-foreground">86-90 Paul Street</p>
                <p className="text-muted-foreground">London, EC2A 4NE</p>
                <p className="text-muted-foreground">United Kingdom</p>
                <p className="mt-4 text-muted-foreground">VAT No: 385 9249 43</p>
                <p className="text-muted-foreground">Company Reg: 13467217</p>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
                Proposal For
              </h2>
              <div className="space-y-2 text-sm">
                <p className="font-semibold">{DEMO_CUSTOMER.name}</p>
                <p className="text-muted-foreground">{DEMO_CUSTOMER.company}</p>
                <p className="text-muted-foreground">{DEMO_CUSTOMER.address}</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-semibold">Reference: </span>
                    PROP-{id || "001"}-2026
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-semibold">Date: </span>
                    {new Date().toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why Integra Section */}
        <motion.section
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="py-8 border-y border-border"
        >
          <h2 className="text-2xl font-medium mb-2">Why Choose Integra Networks?</h2>
          <p className="text-muted-foreground mb-8">
            We deliver premium connectivity solutions backed by industry-leading service guarantees.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: "We Own All Hardware",
                description: "No leasing, no third-party kit. Complete control and reliability.",
              },
              {
                icon: Zap,
                title: "Engineer Support Included",
                description: "UK-based engineers with no hidden charges or surprises.",
              },
              {
                icon: CheckCircle,
                title: "14-Day Money Back Guarantee",
                description: "Risk-free installation. Full refund if not satisfied.",
              },
              {
                icon: AlertCircle,
                title: "99.9% Uptime SLA",
                description: "Service level agreement backed by comprehensive support.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-background-alt rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Installation Section */}
        <motion.section variants={fadeUpVariant} initial="hidden" animate="visible">
          <Card className="bg-card border-border">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Your Installation
              </h2>
              <div className="space-y-4 text-sm">
                <p className="text-foreground">
                  We'll conduct a desktop survey using Google Earth to understand your property and
                  connectivity requirements. This helps us plan the optimal solution for your
                  location.
                </p>
                <p className="text-foreground">
                  On installation day, our UK-based engineers will install our enterprise-grade
                  equipment and external antenna. We'll discuss antenna placement options to ensure
                  both performance and aesthetic considerations are met.
                </p>
                <p className="text-foreground font-semibold">
                  Please provide a video walkthrough of your property exterior to support the
                  planning process.
                </p>
                <p className="text-muted-foreground pt-2 border-t border-border">
                  Questions? Contact us at{" "}
                  <a
                    href="mailto:support@integra-networks.co.uk"
                    className="text-primary font-semibold hover:underline"
                  >
                    support@integra-networks.co.uk
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Connectivity Options - Interactive Pricing */}
        <motion.section variants={fadeUpVariant} initial="hidden" animate="visible">
          <h2 className="text-2xl font-medium mb-6">Connectivity Options</h2>
          <div className="space-y-3">
            {CONNECTIVITY_OPTIONS.map((option) => (
              <motion.div
                key={option.id}
                whileHover={{ scale: 1.01 }}
                onClick={() =>
                  setOrderSummary({ ...orderSummary, selectedConnectivity: option.id })
                }
                className={`cursor-pointer p-4 rounded-lg border-2 transition-all ${
                  orderSummary.selectedConnectivity === option.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <RadioIndicator
                    checked={orderSummary.selectedConnectivity === option.id}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <label
                          htmlFor={option.id}
                          className="font-semibold cursor-pointer block"
                        >
                          {option.name}
                        </label>
                        <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                      </div>
                      {option.recommended && (
                        <Badge className="ml-4 bg-primary text-primary-foreground whitespace-nowrap">
                          Recommended
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-8 mt-4 ml-8">
                  <div>
                    <p className="text-xs text-muted-foreground">Installation Cost</p>
                    <p className="font-semibold text-lg">£{option.installationCost.toFixed(2)}</p>
                  </div>
                  {option.monthlyCost !== null && (
                    <div>
                      <p className="text-xs text-muted-foreground">Monthly Cost (exc VAT)</p>
                      <p className="font-semibold text-lg">£{option.monthlyCost.toFixed(2)}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* WiFi Add-On Section */}
        <motion.section variants={fadeUpVariant} initial="hidden" animate="visible">
          <h2 className="text-xl font-medium mb-4">WiFi Add-Ons</h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Connect Effortlessly: Superior WiFi Unleashed
          </p>

          <Card className="p-6 border-border">
            <div className="flex items-start gap-4">
              <Checkbox
                id="wifi-mesh"
                checked={orderSummary.wifiMeshIncluded}
                onCheckedChange={(checked) =>
                  setOrderSummary({ ...orderSummary, wifiMeshIncluded: Boolean(checked) })
                }
              />
              <div className="flex-1">
                <label htmlFor="wifi-mesh" className="font-semibold cursor-pointer flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-primary" />
                  WiFi Mesh Access Point
                </label>
                <p className="text-sm text-muted-foreground mt-1">
                  Enterprise-grade mesh networking for complete coverage
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Using your own network? Simply untick if not required.
                </p>
              </div>
              <div className="text-right whitespace-nowrap">
                <p className="text-xs text-muted-foreground">One-off Cost</p>
                <p className="font-semibold text-lg">£{WIFI_ADDONS[0].oneOffCost.toFixed(2)}</p>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Multi-Site Add-On */}
        <motion.section variants={fadeUpVariant} initial="hidden" animate="visible">
          <h2 className="text-xl font-medium mb-4">Multi-Site / P2P Connectivity</h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Extend connectivity to outbuildings, workshops, or separate properties
          </p>

          <Card className="p-6 border-border">
            <div className="flex items-start gap-4 mb-6">
              <Checkbox
                id="multisite"
                checked={orderSummary.multiSiteEnabled}
                onCheckedChange={(checked) =>
                  setOrderSummary({
                    ...orderSummary,
                    multiSiteEnabled: Boolean(checked),
                    multiSiteQuantity: 0,
                  })
                }
              />
              <div className="flex-1">
                <label htmlFor="multisite" className="font-semibold cursor-pointer">
                  Enable Multi-Site Connectivity
                </label>
                <p className="text-sm text-muted-foreground mt-1">
                  Engineering, Config, Brackets & Cabling: £250.00 + £150.00 per additional building
                </p>
              </div>
            </div>

            {orderSummary.multiSiteEnabled && (
              <div className="ml-8 p-4 bg-background rounded border border-border">
                <label htmlFor="multisite-qty" className="text-sm font-semibold block mb-2">
                  Number of Additional Buildings:
                </label>
                <div className="flex items-center gap-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      setOrderSummary({
                        ...orderSummary,
                        multiSiteQuantity: Math.max(0, orderSummary.multiSiteQuantity - 1),
                      })
                    }
                  >
                    −
                  </Button>
                  <input
                    id="multisite-qty"
                    type="number"
                    min="0"
                    value={orderSummary.multiSiteQuantity}
                    onChange={(e) =>
                      setOrderSummary({
                        ...orderSummary,
                        multiSiteQuantity: Math.max(0, parseInt(e.target.value) || 0),
                      })
                    }
                    className="w-16 px-2 py-1 text-center border border-border rounded"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      setOrderSummary({
                        ...orderSummary,
                        multiSiteQuantity: orderSummary.multiSiteQuantity + 1,
                      })
                    }
                  >
                    +
                  </Button>
                  {orderSummary.multiSiteQuantity > 0 && (
                    <span className="text-sm text-muted-foreground ml-4">
                      £{multiSiteCost.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            )}
          </Card>
        </motion.section>

        {/* Order Summary */}
        <motion.section variants={fadeUpVariant} initial="hidden" animate="visible">
          <Card className="bg-card border-border">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                {selectedOption && (
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">{selectedOption.name}</span>
                    <span className="font-semibold">£{installationCost.toFixed(2)}</span>
                  </div>
                )}

                {orderSummary.wifiMeshIncluded && (
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">WiFi Mesh Access Point</span>
                    <span className="font-semibold">£{wifiCost.toFixed(2)}</span>
                  </div>
                )}

                {orderSummary.multiSiteEnabled && orderSummary.multiSiteQuantity > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">
                      Multi-Site Connectivity ({orderSummary.multiSiteQuantity} buildings)
                    </span>
                    <span className="font-semibold">£{multiSiteCost.toFixed(2)}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">VAT (20%)</span>
                  <span className="font-semibold">£{vat.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <span className="font-medium text-lg">Total Installation</span>
                <span className="font-medium text-xl text-primary">£{total.toFixed(2)}</span>
              </div>

              {monthlyTotal > 0 && (
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Monthly Commitment</span>
                    <span className="font-medium text-lg">£{monthlyTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">(exc VAT)</p>
                </div>
              )}
            </div>
          </Card>
        </motion.section>

        {/* Customer Details Form */}
        <motion.section variants={fadeUpVariant} initial="hidden" animate="visible">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Primary Address */}
            <div>
              <h2 className="text-xl font-medium mb-4">Customer Details</h2>
              <Card className="p-6 border-border">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="col-span-2">
                    <Label htmlFor="customerName" className="text-sm font-semibold">
                      Customer Name *
                    </Label>
                    <Input
                      id="customerName"
                      {...register("customerName")}
                      className="mt-1"
                      placeholder="Full name"
                    />
                    {errors.customerName && (
                      <p className="text-destructive text-sm mt-1">{errors.customerName.message}</p>
                    )}
                  </div>

                  <div className="col-span-2">
                    <Label htmlFor="companyName" className="text-sm font-semibold">
                      Company Name
                    </Label>
                    <Input
                      id="companyName"
                      {...register("companyName")}
                      className="mt-1"
                      placeholder="Company name (optional)"
                    />
                  </div>

                  <div>
                    <Label htmlFor="companyRegistration" className="text-sm font-semibold">
                      Company Registration
                    </Label>
                    <Input
                      id="companyRegistration"
                      {...register("companyRegistration")}
                      className="mt-1"
                      placeholder="Optional"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      className="mt-1"
                      placeholder="+44 20 1234 5678"
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="col-span-2">
                    <Label htmlFor="email" className="text-sm font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="mt-1"
                      placeholder="customer@company.com"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="border-t border-border pt-4 mt-4">
                  <h3 className="font-medium mb-3">Service Address</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="buildingNumber" className="text-sm font-semibold">
                        Building Number *
                      </Label>
                      <Input
                        id="buildingNumber"
                        {...register("buildingNumber")}
                        className="mt-1"
                        placeholder="Unit 2"
                      />
                      {errors.buildingNumber && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.buildingNumber.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="postcode" className="text-sm font-semibold">
                        Postcode *
                      </Label>
                      <Input
                        id="postcode"
                        {...register("postcode")}
                        className="mt-1"
                        placeholder="NG7 2AA"
                      />
                      {errors.postcode && (
                        <p className="text-destructive text-sm mt-1">{errors.postcode.message}</p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <Label htmlFor="street" className="text-sm font-semibold">
                        Street Address *
                      </Label>
                      <Input
                        id="street"
                        {...register("street")}
                        className="mt-1"
                        placeholder="Thane Road"
                      />
                      {errors.street && (
                        <p className="text-destructive text-sm mt-1">{errors.street.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="city" className="text-sm font-semibold">
                        City / Town *
                      </Label>
                      <Input
                        id="city"
                        {...register("city")}
                        className="mt-1"
                        placeholder="Nottingham"
                      />
                      {errors.city && (
                        <p className="text-destructive text-sm mt-1">{errors.city.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Installation Address */}
            <div>
              <h2 className="text-xl font-medium mb-4">Installation Address</h2>
              <Card className="p-6 border-border">
                <div className="mb-4 flex items-center gap-2">
                  <Checkbox
                    id="sameAddress"
                    {...register("sameAddress")}
                    defaultChecked={true}
                  />
                  <Label htmlFor="sameAddress" className="font-semibold cursor-pointer">
                    Same as service address above
                  </Label>
                </div>

                {!sameAddress && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="installBuildingNumber" className="text-sm font-semibold">
                        Building Number
                      </Label>
                      <Input
                        id="installBuildingNumber"
                        {...register("installBuildingNumber")}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="installPostcode" className="text-sm font-semibold">
                        Postcode
                      </Label>
                      <Input
                        id="installPostcode"
                        {...register("installPostcode")}
                        className="mt-1"
                      />
                    </div>

                    <div className="col-span-2">
                      <Label htmlFor="installStreet" className="text-sm font-semibold">
                        Street Address
                      </Label>
                      <Input
                        id="installStreet"
                        {...register("installStreet")}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="installCity" className="text-sm font-semibold">
                        City / Town
                      </Label>
                      <Input
                        id="installCity"
                        {...register("installCity")}
                        className="mt-1"
                      />
                    </div>
                  </div>
                )}
              </Card>
            </div>

            {/* Landlord Details */}
            <div>
              <h2 className="text-xl font-medium mb-4">Landlord Details (Optional)</h2>
              <Card className="p-6 border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <Label htmlFor="landlordName" className="text-sm font-semibold">
                      Landlord Name
                    </Label>
                    <Input
                      id="landlordName"
                      {...register("landlordName")}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="landlordPhone" className="text-sm font-semibold">
                      Phone Number
                    </Label>
                    <Input
                      id="landlordPhone"
                      {...register("landlordPhone")}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="landlordEmail" className="text-sm font-semibold">
                      Email
                    </Label>
                    <Input
                      id="landlordEmail"
                      type="email"
                      {...register("landlordEmail")}
                      className="mt-1"
                    />
                  </div>
                </div>
              </Card>
            </div>

            {/* Installation & Technical Contacts */}
            <div>
              <h2 className="text-xl font-medium mb-4">Contact Details</h2>
              <div className="space-y-6">
                {/* Installation Contact */}
                <Card className="p-6 border-border">
                  <h3 className="font-medium mb-4 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Installation Contact *
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <Label htmlFor="installContactName" className="text-sm font-semibold">
                        Name
                      </Label>
                      <Input
                        id="installContactName"
                        {...register("installContactName")}
                        className="mt-1"
                      />
                      {errors.installContactName && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.installContactName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="installContactPhone" className="text-sm font-semibold">
                        Phone
                      </Label>
                      <Input
                        id="installContactPhone"
                        {...register("installContactPhone")}
                        className="mt-1"
                      />
                      {errors.installContactPhone && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.installContactPhone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="installContactEmail" className="text-sm font-semibold">
                        Email
                      </Label>
                      <Input
                        id="installContactEmail"
                        type="email"
                        {...register("installContactEmail")}
                        className="mt-1"
                      />
                      {errors.installContactEmail && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.installContactEmail.message}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>

                {/* Technical Contact */}
                <Card className="p-6 border-border">
                  <h3 className="font-medium mb-4 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Technical Contact *
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <Label htmlFor="techContactName" className="text-sm font-semibold">
                        Name
                      </Label>
                      <Input
                        id="techContactName"
                        {...register("techContactName")}
                        className="mt-1"
                      />
                      {errors.techContactName && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.techContactName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="techContactPhone" className="text-sm font-semibold">
                        Phone
                      </Label>
                      <Input
                        id="techContactPhone"
                        {...register("techContactPhone")}
                        className="mt-1"
                      />
                      {errors.techContactPhone && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.techContactPhone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="techContactEmail" className="text-sm font-semibold">
                        Email
                      </Label>
                      <Input
                        id="techContactEmail"
                        type="email"
                        {...register("techContactEmail")}
                        className="mt-1"
                      />
                      {errors.techContactEmail && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.techContactEmail.message}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Acceptance Section */}
            <motion.section variants={fadeUpVariant} initial="hidden" animate="visible">
              <h2 className="text-xl font-medium mb-4">Acceptance & Signature</h2>
              <Card className="p-6 border-border bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="antenna"
                      {...register("antennaAgreed")}
                    />
                    <label htmlFor="antenna" className="text-sm cursor-pointer leading-relaxed">
                      <span className="font-semibold">I confirm we are allowed to install an external antenna</span> on our property in accordance with local planning regulations and landlord/freeholder approval where required.
                    </label>
                  </div>
                  {errors.antennaAgreed && (
                    <p className="text-destructive text-sm">
                      {errors.antennaAgreed.message}
                    </p>
                  )}

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="terms"
                      {...register("termsAgreed")}
                    />
                    <label htmlFor="terms" className="text-sm cursor-pointer leading-relaxed">
                      <span className="font-semibold">I have read and agree to the</span>
                      {" "}
                      <a
                        href="https://integra-networks.co.uk/terms/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-semibold"
                      >
                        Terms and Conditions
                      </a>
                      {" and "}
                      <a
                        href="https://integra-networks.co.uk/sla/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-semibold"
                      >
                        Service Level Agreement
                      </a>
                    </label>
                  </div>
                  {errors.termsAgreed && (
                    <p className="text-destructive text-sm">
                      {errors.termsAgreed.message}
                    </p>
                  )}
                </div>

                <div className="border-t border-green-200 pt-6 mt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-semibold text-foreground">Installation Fee Note:</span> The installation fee is due immediately following this agreement. A Stripe payment link will be sent via email.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-4">Customer Signature</h3>
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="signatureName" className="text-sm font-semibold">
                            Full Name *
                          </Label>
                          <Input
                            id="signatureName"
                            {...register("signatureName")}
                            className="mt-1"
                            placeholder="Full name"
                          />
                          {errors.signatureName && (
                            <p className="text-destructive text-sm mt-1">
                              {errors.signatureName.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="signatureTitle" className="text-sm font-semibold">
                            Title *
                          </Label>
                          <Input
                            id="signatureTitle"
                            {...register("signatureTitle")}
                            className="mt-1"
                            placeholder="e.g. Managing Director"
                          />
                          {errors.signatureTitle && (
                            <p className="text-destructive text-sm mt-1">
                              {errors.signatureTitle.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="signatureCompany" className="text-sm font-semibold">
                            Company *
                          </Label>
                          <Input
                            id="signatureCompany"
                            {...register("signatureCompany")}
                            className="mt-1"
                          />
                          {errors.signatureCompany && (
                            <p className="text-destructive text-sm mt-1">
                              {errors.signatureCompany.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label className="text-sm font-semibold">Date</Label>
                          <div className="mt-1 p-2 bg-background rounded border border-border">
                            {new Date().toLocaleDateString("en-GB", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-4">Integra Networks</h3>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="text-muted-foreground">Authorised By</p>
                          <p className="font-semibold">Chris Clapham</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Title</p>
                          <p className="font-semibold">Director</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Company</p>
                          <p className="font-semibold">Integra Networks Limited</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Date</p>
                          <p className="font-semibold">{new Date().toLocaleDateString("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.section>

            {/* Submit Button */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              className="flex gap-4"
            >
              <Button
                type="submit"
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Check className="w-4 h-4 mr-2" />
                Accept Proposal
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => window.print()}
                className="no-print"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </motion.div>
          </form>
        </motion.section>

        {/* Footer */}
        <motion.section
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="py-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground mb-4">
            Unhappy with our service? We offer a{" "}
            <span className="font-semibold text-foreground">14-day money back guarantee</span>
          </p>
          <div className="text-xs text-muted-foreground">
            <p>Integra Networks Limited | 86-90 Paul Street, London, EC2A 4NE</p>
            <p>Company Registration: 13467217 | VAT: 385 9249 43</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
