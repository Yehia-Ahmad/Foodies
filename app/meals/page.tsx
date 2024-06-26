import Link from "next/link";

export default function MealsPage() {
    return (
        <div>
            <h1>Meals</h1>
            <p><Link href="/meals/share">Share</Link></p>
            <p><Link href="/meals/Meal-1">Meal-1</Link></p>
            <p><Link href="/meals/Meal-2">Meal-2</Link></p>
        </div>
    );
}