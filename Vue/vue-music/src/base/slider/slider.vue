<!-- 轮播图 -->
<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item,index) in dots" :class="{active:currentPageIndex===index}"></span>
    </div>
  </div>
</template>

<script>
import {addClass} from '../../common/js/dom.js'
import BScroll from 'better-scroll'


 export default
 {
    data()
    {
      return{
        dots:[],
        currentPageIndex:0,
      }
    },
    props:
    {
      loop:
      {
        type:Boolean,
        default:true,
      },
      autoPlay:
      {
        type:Boolean,
        default:true,
      },
      interval:
      {
        type:Number,
        default:4000,
      },
    },
    mounted()
    {
      var that=this;
      setTimeout(function()
        {
            this._setSliderWidth();
            this.initDots();
            this.initSlider();

            if(this.autoPlay)
            {

              this.play();
            };
        }.bind(this),20);

      //监听事件 重新设置款速
      window.addEventListener('resize',function()
      {
          if(!this.slider)
          {
            return ;
          }
          this._setSliderWidth(true);
          // better-scroll提供的方法 宽度发生改变就重新计算
          this.slider.refresh();
      },20);
    },
    methods:
    {
      //手动设置和计算宽度
     _setSliderWidth:function(isResize)
     {
          this.children=this.$refs.sliderGroup.children;  
          console.log(this.children.length);

          let width=0;
          let sliderWidth=this.$refs.slider.clientWidth;

          for(let i=0;i<this.children.length;i++)
          {
              let child=this.children[i];
              addClass(child,'slider-item');

              child.style.width=sliderWidth+'px';
              width+=sliderWidth;
          };

          if(this.loop&&!isResize)
          {
            width+=2*sliderWidth;
          };

          this.$refs.sliderGroup.style.width=width+'px';
      },

      // BScroll初始化
      initSlider:function()
      {
          this.slider=new BScroll(this.$refs.slider,
          {
            scrollX:true,
            scrollY:false,
            momentum:false,
            snap:
            {
              loop:this.loop,
              threshold:0.3,
              speed:400,
            },
            click:true,
          });

          // better-scroll提供的方法
          this.slider.on('scrollEnd',()=>{
              let pageIndex=this.slider.getCurrentPage().pageX;
              if(this.loop)
              {
                pageIndex-=1;
              };

              this.currentPageIndex=pageIndex;

              // 无限轮播 清除一次再掉一次
              if(this.autoPlay)
              {
                clearTimeout(this.timer);
                this.play();
              }
            });
      },
      initDots:function()
      {
        this.dots=new Array(this.children.length);
      },
      play:function()
      {
        let pageIndex=this.currentPageIndex+1;
        if(this.loop)
        {
          pageIndex+=1;
        };
        this.timer=setTimeout(function()
        { 
          // better-scroll提供的方法
          this.slider.goToPage(pageIndex,0,400);
        }.bind(this),this.interval);
      }
    },
    // 组件销毁的时候清理定时器
    distoryed()
    {
      clearTimeout(this.timer);
    }
 }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>