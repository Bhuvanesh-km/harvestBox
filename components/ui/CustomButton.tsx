import { Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  disabled: boolean;
  loading: boolean;
  otherStyles?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  disabled,
  loading,
  otherStyles,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      className={`w-full justify-center items-center bg-[#ff8c00] text-white py-3 mt-4 rounded-lg ${
        disabled ? "bg-[#ffa200a9]" : "bg-[#ff8c00]"
      } ${otherStyles}`}
    >
      {loading ? (
        <Text className="text-white font-JakartaMedium text-xl tracking-[1.5px] text-center">
          Loading...
        </Text>
      ) : (
        <Text className="text-white font-JakartaExtraBold text-xl tracking-[1.5px] text-center">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
