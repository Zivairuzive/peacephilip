# Animation System Documentation

This directory contains a comprehensive animation system built with Framer Motion and custom CSS animations for the Hydravex Engineering website.

## Components

### 1. AnimatedContainer

A wrapper component that provides scroll-triggered animations with various directions and timing options.

**Props:**

-   `children`: ReactNode - Content to animate
-   `className`: string - Additional CSS classes
-   `delay`: number - Animation delay in seconds (default: 0)
-   `duration`: number - Animation duration in seconds (default: 0.6)
-   `direction`: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' - Animation direction
-   `stagger`: number - Stagger delay for child elements
-   `once`: boolean - Whether to animate only once (default: true)

**Example:**

```tsx
<AnimatedContainer direction="up" duration={0.8} delay={0.2}>
    <div>Your content here</div>
</AnimatedContainer>
```

### 2. PageTransition

Provides smooth transitions between pages/routes.

**Props:**

-   `children`: ReactNode - Page content

**Example:**

```tsx
<PageTransition>
    <YourPageContent />
</PageTransition>
```

### 3. StaggeredList

Animates a list of items with staggered timing for a cascading effect.

**Props:**

-   `children`: ReactNode - List items to animate
-   `className`: string - Additional CSS classes
-   `staggerDelay`: number - Delay between each item (default: 0.1)
-   `direction`: 'up' | 'down' | 'left' | 'right' - Animation direction

**Example:**

```tsx
<StaggeredList className="grid grid-cols-3" direction="up" staggerDelay={0.2}>
    <Card />
    <Card />
    <Card />
</StaggeredList>
```

### 4. HoverAnimation

Adds hover effects to any element.

**Props:**

-   `children`: ReactNode - Element to animate on hover
-   `className`: string - Additional CSS classes
-   `scale`: number - Scale factor on hover (default: 1.05)
-   `rotate`: number - Rotation in degrees on hover (default: 0)
-   `duration`: number - Animation duration (default: 0.2)
-   `whileHover`: any - Custom hover animation
-   `whileTap`: any - Custom tap animation

**Example:**

```tsx
<HoverAnimation scale={1.1} rotate={5}>
    <button>Hover me</button>
</HoverAnimation>
```

### 5. ParallaxScroll

Creates parallax scrolling effects.

**Props:**

-   `children`: ReactNode - Content to apply parallax to
-   `className`: string - Additional CSS classes
-   `speed`: number - Parallax speed multiplier (default: 0.5)
-   `direction`: 'up' | 'down' - Scroll direction

**Example:**

```tsx
<ParallaxScroll speed={0.3} direction="up">
    <div>Parallax content</div>
</ParallaxScroll>
```

### 6. LoadingSpinner

Animated loading spinner with customizable size and color.

**Props:**

-   `size`: 'sm' | 'md' | 'lg' - Spinner size (default: 'md')
-   `color`: string - Tailwind color class (default: 'text-blue-600')
-   `children`: ReactNode - Optional content to animate with pulse effect

**Example:**

```tsx
<LoadingSpinner size="lg" color="text-sky-600" />
```

## CSS Animation Classes

The following custom CSS classes are available in `globals.css`:

### Keyframe Animations

-   `.animate-float` - Floating animation
-   `.animate-pulse-glow` - Pulsing glow effect
-   `.animate-slide-in-left` - Slide in from left
-   `.animate-slide-in-right` - Slide in from right
-   `.animate-fade-in-up` - Fade in with upward motion
-   `.animate-scale-in` - Scale in animation

### Hover Effects

-   `.hover-lift` - Lifts element on hover with shadow
-   `.hover-glow` - Adds glow effect on hover

## Usage Examples

### Basic Page Animation

```tsx
import { AnimatedContainer } from "./components/animations";

export default function MyPage() {
    return (
        <AnimatedContainer direction="fade" duration={0.8}>
            <h1>Welcome to our site</h1>
            <p>This content will fade in smoothly</p>
        </AnimatedContainer>
    );
}
```

### Staggered Card Grid

```tsx
import { StaggeredList } from "./components/animations";
import Card from "./Card";

export default function ServicesGrid() {
    return (
        <StaggeredList
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            direction="up"
            staggerDelay={0.15}
        >
            {services.map((service) => (
                <Card key={service.id} {...service} />
            ))}
        </StaggeredList>
    );
}
```

### Interactive Button

```tsx
import { HoverAnimation } from "./components/animations";

export default function CTAButton() {
    return (
        <HoverAnimation
            scale={1.05}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
        >
            <button className="bg-sky-600 text-white px-6 py-3 rounded-lg">
                Get Started
            </button>
        </HoverAnimation>
    );
}
```

## Animation Utilities

The `utils/animations.ts` file contains:

-   **animationVariants**: Pre-defined animation variants for common effects
-   **transitionPresets**: Common transition configurations
-   **delays**: Standard delay values
-   **viewportSettings**: Viewport configuration for scroll animations

## Best Practices

1. **Performance**: Use `once={true}` for scroll animations to prevent re-triggering
2. **Accessibility**: Ensure animations don't interfere with user preferences
3. **Timing**: Keep animations under 1 second for better UX
4. **Staggering**: Use staggered animations for lists to create visual hierarchy
5. **Mobile**: Test animations on mobile devices for performance

## Integration with Existing Components

The animation system has been integrated into:

-   ✅ Banner component - Enhanced with staggered text animations
-   ✅ Card component - Added hover effects and entrance animations
-   ✅ Section component - Improved with directional animations
-   ✅ Navigation - Added smooth transitions and hover effects
-   ✅ Page transitions - Implemented across all routes

## Customization

To add new animation variants, extend the `animationVariants` object in `utils/animations.ts`:

```tsx
export const animationVariants = {
    // ... existing variants
    customSlide: {
        hidden: { opacity: 0, x: -100, rotate: -10 },
        visible: { opacity: 1, x: 0, rotate: 0 },
    },
};
```

Then use it in your components:

```tsx
<motion.div
    variants={animationVariants.customSlide}
    initial="hidden"
    whileInView="visible"
>
    Content
</motion.div>
```

