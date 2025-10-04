import { Href } from "expo-router";

export type ButtonProps = {
    title: string;
    onPress?: () => void;
    color?: 'blue' | 'yellow'| 'red' | 'white' | 'purple';
    href?: Href;
    disabled?: boolean;
}