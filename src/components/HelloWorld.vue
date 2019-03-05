 <template>
      <div>
          <h2>{{msg}}</h2>
          <hr/>
           <h3>{{$store.state.count}}</h3> <!--分组前 -->
          <h3>{{$store.state.a.count}}</h3> <!--分组后 -->
          <h3>{{count}}</h3>
          <div>
              <!-- 最开始使用mutations -->
              <button @click="$store.commit('add')">+</button>
              <button @click="$store.commit('add2', 10)">+10</button>
              <button @click="$store.commit('reduce')">-</button>
     
        </div>
       

        <div> <!-- 最开始使用ACTIONS -->

          <button @click="$store.dispatch('addAction')">+</button>
          <button @click="$store.dispatch('reduceAction')">-</button>
 
        </div>
        <div><!-- map ACTIONS -->
          <button @click="addAction">+</button>
          <button @click="reduceAction">-</button>
 
        </div>

        <div><!-- map mutations  -->
          <button @click="add">+</button>
          <button @click="add2(10)">+10</button>
          <button @click="reduce">-</button>
 
        </div>
      </div>
</template>

<script>
  import store from '../store';
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
  export default{
      data(){
          return{
              msg:'Hello Vuex',
          }
      },
      store,
      computed:{
        ...mapState(["count"]),
        ...mapGetters(["count"])
      },
      // computed:mapState({
      //   count:state=>state.count
      // })

      // computed: mapState(["count"]),
      methods:{
        ...mapMutations([
          'add','reduce'
        ]),
        ...mapActions(['addAction','reduceAction'])

      } 
        
        
      
  }
</script>
