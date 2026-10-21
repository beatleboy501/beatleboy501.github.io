import type { HTMLAttributes, ReactNode } from "react";

type CardProps = {
    title: string;
    description?: string;
    children?: ReactNode;
    footer?: ReactNode;
} & HTMLAttributes<HTMLElement>;

const Card = ({
    title,
    description,
    children,
    footer,
    className = "",
    ...props
}: CardProps) => {
    return (
        <article
            className={`overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 ${className}`}
            {...props}
        >
            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                    {title}
                </h2>
                {description && (
                    <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                        {description}
                    </p>
                )}
            </div>

            {children && <div className="mt-5">{children}</div>}

            {footer && (
                <footer className="mt-6 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                    {footer}
                </footer>
            )}
        </article>
    );
};

export default Card;
