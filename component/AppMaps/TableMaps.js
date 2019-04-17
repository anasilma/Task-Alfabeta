import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows} from 'react-native-table-component';
import * as datas from './DataMaps.json'
import AppHeader from '../AppHome/AppHeader.js';

export default class TableMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Longitude', 'Latitude'],
      tableTitle: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6'],
      tableData: datas.data
    }
  }

  render() {
    const state = this.state;
    console.log('cek data', this.state.tableData)
    return (
      <View style={{ flex: 1 }}>
        <AppHeader title={'Tabel JSON'} />
        <View style={styles.container}>
          <Table>
            <Row data={state.tableHead} flexArr={[2, 2]} style={styles.head} textStyle={styles.text} />
            {this.state.tableData.map((tabdat, index) =>
              <TableWrapper style={styles.wrapper} key={index}>
                <Rows data={[[tabdat.longitude, tabdat.latitude]]} flexArr={[2, 2]} style={styles.row} textStyle={styles.text} />
              </TableWrapper>
            )}
          </Table>
          <Text style={styles.text2}>Create halaman table untuk menampilkan JSON diatas</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  text: { textAlign: 'center' },
  text2: { textAlign: 'center', fontSize: 15, padding: 20 }
});