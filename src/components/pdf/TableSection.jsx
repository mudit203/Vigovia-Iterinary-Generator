import { View, Text } from "@react-pdf/renderer";
import { tableStyles } from "./styles";

export default function TableSection({ title, headers, rows, columnWidths }) {
  return (
    <View style={tableStyles.container}>
      {title && <Text style={tableStyles.title}>{title}</Text>}
      
      <View style={tableStyles.header}>
        {headers.map((header, index) => (
          <Text 
            key={index} 
            style={[
              tableStyles.headerCell, 
              columnWidths && { flex: columnWidths[index] }
            ]}
          >
            {header}
          </Text>
        ))}
      </View>
      
      {rows.map((row, rowIndex) => (
        <View 
          key={rowIndex} 
          style={[
            tableStyles.row,
            rowIndex === rows.length - 1 && tableStyles.lastRow
          ]}
        >
          {row.map((cell, cellIndex) => (
            <Text 
              key={cellIndex} 
              style={[
                tableStyles.cell,
                columnWidths && { flex: columnWidths[cellIndex] }
              ]}
            >
              {cell}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}