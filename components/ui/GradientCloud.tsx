import { cn } from '@/lib/utils';

export default function GradientCloud({className}: {className?: string}) {
  return (
    <div
      className={cn("-z-10 absolute w-full h-full bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-300 rounded-full blur-3xl opacity-40", className)}
    />
  )
}
