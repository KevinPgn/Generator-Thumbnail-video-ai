import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">ThumbnailAI</h3>
            <p className="text-sm text-zinc-500">
              Creating engaging thumbnails with the power of AI. Boost your content's visibility.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-900"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-900"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-900"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#features" className="text-zinc-500 hover:text-zinc-900">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-zinc-500 hover:text-zinc-900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-zinc-500 hover:text-zinc-900">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/api-docs" className="text-zinc-500 hover:text-zinc-900">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" className="text-zinc-500 hover:text-zinc-900">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="text-zinc-500 hover:text-zinc-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="/careers" className="text-zinc-500 hover:text-zinc-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-zinc-500 hover:text-zinc-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/privacy" className="text-zinc-500 hover:text-zinc-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-zinc-500 hover:text-zinc-900">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-zinc-500 hover:text-zinc-900">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-zinc-500">
          <p>© {currentYear} ThumbnailAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 