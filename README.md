# Multi-Industry Product UI Showcase

A professional Next.js application demonstrating distinct, high-quality user interface designs for 7 different industries. Each page is crafted to match the aesthetic and functional requirements of its specific domain, all driven by a centralized data source.

##  Live Demo

Navigate to the [Landing Page](http://localhost:3000) to explore the different industry designs.

##  Industries & Themes

This project features 7 unique product page implementations:

1.  **Clothing & Fashion** (`/clothing`): Minimalist e-commerce design with color/size selection and image gallery. (Inspired by Amazon Fashion)
2.  **Food & Beverage** (`/food`): Appetizing layout with dietary badges, reviews, and sticky order bar. (Inspired by KFC)
3.  **Education** (`/education`): Academic institution overview with campus stats and facility highlights. (Inspired by Oxford University)
4.  **Online Courses** (`/courses`): Modern SaaS/LMS style with curriculum breakdown and instructor profiles. (Inspired by Coursera)
5.  **Live Classes** (`/online-classes`): Webinar registration page with countdown timer and scheduling. (Inspired by Unacademy)
6.  **Digital Products** (`/digital`): Software license sales page with feature grids and system specs. (Inspired by Amazon Kindle)
7.  **NFT Marketplace** (`/nft`): Premium dark-mode design with auction history and blockchain details. (Inspired by OpenSea/Rarible)

## 🛠 Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Font**: [Geist](https://vercel.com/font)
-   **Icons**: Heroicons (via SVG)

## Project Structure

```bash
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Global layout with Header/Footer
│   ├── page.tsx          # Landing page (Navigation Hub)
│   ├── [industry]/       # Individual industry pages
├── components/           # Reusable UI components
│   ├── Button.tsx        # Primary/Secondary buttons
│   ├── FeatureGrid.tsx   # Grid layout for features
│   ├── ...               # Other shared components
├── data/
│   └── content.json      # Single source of truth for all page content
```

## ⚡ Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/multi-industry-ui.git
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design Philosophy

-   **Data-Driven**: All text, images, and product details are fetched from `data/content.json`, making the UI purely presentational and easy to update.
-   **Responsive**: Mobile-first design ensuring perfect layout on all devices.
-   **Clean Aesthetic**: Strict adherence to professional design principles—no neon colors, excessive gradients, or "AI-generated" looks.
-   **Semantic HTML**: Accessible and SEO-friendly structure.

---

Built with ❤️ using Next.js and Tailwind CSS.
