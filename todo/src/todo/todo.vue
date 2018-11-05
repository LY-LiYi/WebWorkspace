<template>
    <section class="real-app">
        <input type="text"
               class="add-input"
               autofocus="autofocus"
               placeholder="接下来要做什么?"
               @keyup.enter="addTodo"
        >

        <!-- 使用items组件 -->
        <!-- :todo="todo" 往子组件item.vue 传入todo对象
             v-for="todo in filteredTodos" 遍历 todos 数组
             @del="deleteTodo" 接收子组件要触发的del方法
        -->
         <!-- 为deleteTodo子组件传递过来的方法 -->
        <Item :todo="todo"
                  v-for="todo in filteredTodos"
                  :key="todo.id"
                  @del="deleteTodo"
        >
        </Item>
        <!--
            用 key 管理可复用的元素
            Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。
            这么做除了使 Vue 变得非常快之外，还有其它一些好处。
        -->


        <!-- 使用tabs组件 -->
        <Tabs :filter="filter"
                  :todos="todos"
                  @toggle="toggleFilter"
                  @clearAllCompleted="clearAllCompleted"
        >
        </Tabs>
    </section>
</template>

<script>
    // 数据在那层就在那里操作
    import Item from './items.vue';
    import Tabs from './tabs.vue';

    let id = 0;

    export default {
        // data() 声明数据
        data() {
            return {
            	//多个数据 所以是个数组
                todos: [],
                // filter默认为all
                filter: 'all'
            }

        },

        // 计算
        computed: {
            // 过滤的todo
            filteredTodos() {
                // 判断filter是不是等于all 是的话返回整个todo
                if (this.filter === 'all') {
                    return this.todos;
                }
                const completed = this.filter === 'completed';
                
                // 将todos数组中，completed为true的值过滤出来，并返回一个新数组
                return this.todos.filter(todo => completed === todo.completed);

            }
        },

        // 组件
        components: {
            Item,
            Tabs,
        }, 

        //方法
        methods: {
        	//添加的操作
            addTodo(e) {
                if (e.target.value.trim()) {
                    this.todos.unshift({
                        id: id++,
                        content: e.target.value.trim(),
                        completed: false
                    });
                    e.target.value = '';
                } else {
                    alert('输入不能为空 !');
                }
            },

            deleteTodo(id) {
            	//删除一行的操作 找到该行所在todo数组的index
                this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
            },

            // tabs中间的切换 将当前的filter变成子组件传递过来的state
            toggleFilter(state) {
                this.filter = state;
            },
            
            //清除所有的未完成的todo
            clearAllCompleted() {
                // 过滤出没有完成的todo 新数组
                // 给todos赋一个新的值（即todo.completed为false的值）
                this.todos = this.todos.filter(todo => todo.completed === false)

            }
        }
    };
</script>

<style lang="stylus" scoped>
    .real-app {
        width 600px
        margin 0 auto
        box-shadow 0 0 5px #666
    }

    .add-input {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        box-sizing: border-box;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 36px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }
</style>