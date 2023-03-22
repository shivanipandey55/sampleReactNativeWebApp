import React from "react";
import { TextInput, SafeAreaView } from "react-native";
import { styles } from "../constants/globalStyles";
type Props = {
  task: { id: string; title: string; state: string };
  onArchiveTask: any;
  onPinTask: any;
};
export const Task: React.FC<Props> = ({ task: { title } }) => {
  return (
    <SafeAreaView style={styles.ListItem}>
      <TextInput value={title} editable={false} />
    </SafeAreaView>
  );
};
