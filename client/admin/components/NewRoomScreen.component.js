import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import InputCombo from "./InputCombo.component";
import DropDownPicker from "react-native-dropdown-picker";
import CorneredButton from "./CorneredButton";

export default function NewRoomScreen({ navigation }) {
  const [price, setPrice] = React.useState("");
  const [typeOpen, setTypeOpen] = React.useState(false);
  const [typeValue, setTypeValue] = React.useState(null);
  const [typeItems, setTypeItems] = React.useState([
    { label: "Nhà nguyên căn", value: "whole" },
    { label: "Phòng cho thuê", value: "rent" },
    { label: "Kí túc xá", value: "dorm" },
    { label: "Phòng ở ghép", value: "couple" },
  ]);
  const onTypeOpen = React.useCallback(() => {
    setExtraOpen(false);
  });

  const [extraOpen, setExtraOpen] = React.useState(false);
  const [extraValue, setExtraValue] = React.useState(null);
  const [extraItems, setExtraItems] = React.useState([
    { label: "WC riêng", value: "separatedWC" },
    { label: "Ban công", value: "balcony" },
    { label: "Wifi", value: "wifi" },
    { label: "Chỗ để xe", value: "parking" },
    { label: "An ninh", value: "security" },
  ]);
  const onExtraOpen = React.useCallback(() => {
    setTypeOpen(false);
  });

  const [people, setPeole] = React.useState(0);
  const [area, setArea] = React.useState(0);
  const [name, setName] = React.useState();
  const [address, setAddress] = React.useState();
  const [info, setInfo] = React.useState();
  return (
    <View style={styles.container}>
      <InputCombo title="Giá tiền" handleValueChange={setPrice} />
      <DropDownPicker
        containerStyle={styles.picker}
        open={typeOpen}
        value={typeValue}
        items={typeItems}
        setOpen={setTypeOpen}
        setValue={setTypeValue}
        setItems={setTypeItems}
        placeholder="Loại phòng"
        onOpen={onTypeOpen}
        zIndex={3000}
        zIndexInverse={1000}
        min={1}
      />
      <DropDownPicker
        containerStyle={styles.picker}
        open={extraOpen}
        value={extraValue}
        items={extraItems}
        setOpen={setExtraOpen}
        setValue={setExtraValue}
        setItems={setExtraItems}
        placeholder="Tiện ích"
        multiple={true}
        onOpen={onExtraOpen}
        zIndex={2000}
        zIndexInverse={2000}
      />
      <InputCombo title="Số người" handleValueChange={setPeole} />
      <InputCombo title="Diện tích" handleValueChange={setArea} />
      <InputCombo title="Tên phòng trọ hiển thị" handleValueChange={setName} />
      <InputCombo title="Địa chỉ" handleValueChange={setAddress} />
      <InputCombo title="Thông tin khác" handleValueChange={setInfo} />
      <CorneredButton text="Xác nhận" color="#0ECFFA" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  picker: {
    width: "80%",
  },
});
