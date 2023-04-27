import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { OptionsData } from "../../../common/constants/options";

const Options = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOptionSelection = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((e) => e !== option));
    } else if (selectedOptions.length < 5) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flexWrap: "nowrap" }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingHorizontal: 21,
        }}
      >
        {OptionsData.map((e, i) => {
          const isSelected = selectedOptions.includes(e);
          return (
            <View
              key={i}
              style={[
                {
                  borderWidth: 2,
                  borderColor: "black",
                  borderRadius: 20,
                  paddingVertical: 8,
                  paddingHorizontal: 21,
                  marginRight: 4,
                },
                isSelected && { backgroundColor: "black" },
              ]}
              onTouchEnd={() => toggleOptionSelection(e)}
            >
              <Text
                style={[{ color: "black" }, isSelected && { color: "white" }]}
              >
                {e}
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Options;
