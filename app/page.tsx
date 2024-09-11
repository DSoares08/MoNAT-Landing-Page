import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Triangle, Star, GitFork, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-200 dark:border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <Triangle className="h-6 w-6 mr-2 text-orange-500" />
          <span className="font-bold text-lg text-orange-500">MonAT</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-orange-500 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-orange-500 transition-colors" href="#cta">
            Get Started
          </Link>
          <Link className="text-sm font-medium hover:text-orange-500 transition-colors" href="https://github.com/DSoares08/REST-API">
            GitHub
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to <span className="text-orange-500">MonAT</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  The Monetized API Template. Easily customize how your customers are billed with Stripe integration. 100% JavaScript
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-11 items-center justify-center rounded-md bg-orange-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-orange-400"
                  href="https://github.com/DSoares08/REST-API"
                >
                  View on GitHub
                </Link>
                <Link
                  className="inline-flex h-11 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-orange-400 dark:focus-visible:ring-orange-400"
                  href="#features"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-orange-500">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900">
                  <Star className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">Monthly billing</h3>
                <p className="text-gray-500 dark:text-gray-400">Seemless Stripe integration to manage customers and tweak prices.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900">
                  <GitFork className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">Open source</h3>
                <p className="text-gray-500 dark:text-gray-400">Community can proactively improve template by collaborating via GitHub.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900">
                  <ShieldCheck className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">Secure API keys</h3>
                <p className="text-gray-500 dark:text-gray-400">All customer keys are hashed before being store in the database, protecting them from hackers.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Started Today</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Ready to dive in? Check out our GitHub repository and start contributing!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 MonAT. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        </nav>
      </footer>
    </div>
  )
}
