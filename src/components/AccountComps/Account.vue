<template>
  <div id="info">
    <h2>账户信息</h2>
    <Button v-on:click="tableShow">test-show</Button>
    <form>
      <Table
        stripe
        border
        :show-header="noheader"
        :columns="tbcolumns"
        :data="tbdata"
        class="tb">
        <template slot-scope="{ row }" slot="c1">
            <strong style="color: #035bc6;">{{ row.c1 }}</strong>
        </template>
        <template slot-scope="{ row }" slot="c3">
            <strong style="color: #035bc6;">{{ row.c3 }}</strong>
        </template>
        <template slot-scope="{ row }" slot="c5">
            <strong style="color: #035bc6;">{{ row.c5 }}</strong>
        </template>
      </Table>
    </form>
  </div>

</template>

<script>
  export default{
    name: 'Account',
    data(){
      return {
        //for test
        firstName : '张',
        lastName : '潮越',
        phoneNumber: '123',
        email: '@example',
        address: '163 xinlin road',
        cardInfo : 'ABC',
        citiAccount : 'citi',
        isBinded: false, //判断是否绑定了花旗账户

        noheader: false,
        tbcolumns: [
          {
            title: 'C1',
            key: 'c1',
            width: 100,
            slot: 'c1'
          },
          {
            title: 'C2',
            key: 'c2',
          },
          {
            title: 'C3',
            key: 'c3',
            width: 90,
            slot: 'c3'
          },
          {
            title: 'C4',
            key: 'c4',
          },
          {
            title: 'C5',
            key: 'c5',
            width: 120,
            slot: 'c5'
          },
          {
            title: 'C6',
            key: 'c6',
          }
        ],
        tbdata: []
      }
    },
    methods:{
      getInfo(){
        //通过api获取账户信息
      },
      tableShow() {
        this.tbdata.push({
          c1: '姓',
          c2: this.firstName,
          c3: '名',
          c4: this.lastName,
          c5: '手机号',
          c6: this.phoneNumber
        });
        this.tbdata.push({
          c1: '电子邮箱',
          c2: this.email,
          c3: '地址',
          c4: this.address,
          c5: '银行卡信息',
          c6: this.cardInfo
        });
        this.tbdata.push({
          c1: '花旗账号',
          c2: this.citiAccount,
          c3: '',
          c4: '',
          c5: '',
          c6: ''
        });
      }
    },
  }
</script>

<style scoped>
.tb {
  margin: 5px 30px;

}

</style>
