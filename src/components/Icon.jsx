import {
  ArrowRight, BookOpen, Bot, Car, Check, CheckCircle, Clock,
  Globe, Headphones, HelpCircle, LayoutGrid, Lightbulb, Loader,
  Mail, MapPin, Menu, MessageCircle, MessageSquare, Play,
  Send, Shield, ShoppingBag, Smartphone, Target, TrendingUp,
  X, Zap,
} from 'lucide-react';

const ICONS = {
  ArrowRight, BookOpen, Bot, Car, Check, CheckCircle, Clock,
  Globe, Headphones, HelpCircle, LayoutGrid, Lightbulb, Loader,
  Mail, MapPin, Menu, MessageCircle, MessageSquare, Play,
  Send, Shield, ShoppingBag, Smartphone, Target, TrendingUp,
  X, Zap,
};

export function Icon({ name, size = 24, className = '' }) {
  const LucideIcon = ICONS[name] ?? ICONS.HelpCircle;
  return <LucideIcon size={size} className={className} />;
}
