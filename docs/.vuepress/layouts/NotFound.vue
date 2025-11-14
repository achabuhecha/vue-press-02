<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <!-- 404 图片 -->
      <div class="image-container">
        <img 
          src="https://vuejs.press/images/hero.png" 
          alt="404 Not Found" 
          class="not-found-image"
        />
      </div>

      <!-- 文字内容 -->
      <div class="text-content">
        <h1 class="error-code">404</h1>
        <h2 class="error-title">页面未找到</h2>
        <p class="error-description">
          抱歉，您访问的页面不存在或已被移除。
        </p>
        <p class="error-tip">
          请检查您输入的网址是否正确，或返回首页继续浏览。
        </p>

        <!-- 返回首页按钮 -->
        <button @click="goPrePage" class="pre-button">
          返回上一页
        </button>
        <!-- 返回首页按钮 -->
        <button @click="goHome" class="home-button">
          返回首页
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

// 获取路由实例
const router = useRouter()

// 封装返回上一页的方法
const goPrePage = () => {
  router.go(-1) // 返回上一页
}

// 定义返回首页的方法
const goHome = () => {
  router.push('/') // 当前页打开首页（不会新开标签页）
}
</script>

<style scoped>
/* 全局容器 */
.not-found-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  box-sizing: border-box;
}

/* 主要内容区域 */
.not-found-content {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: 40px;
  text-align: center;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

/* 图片容器 */
.image-container {
  width: 100%;
  max-width: 400px;
}

/* 404 图片 */
.not-found-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* 文字内容区域 */
.text-content {
  text-align: center;
}

/* 错误代码 */
.error-code {
  font-size: 4rem;
  font-weight: bold;
  color: #333;
  margin: 0;
  line-height: 1;
}

/* 错误标题 */
.error-title {
  font-size: 1.8rem;
  color: #555;
  margin: 10px 0 15px 0;
  font-weight: 600;
}

/* 错误描述 */
.error-description {
  font-size: 1.1rem;
  color: #666;
  margin: 0 0 10px 0;
  line-height: 1.5;
}

/* 错误提示 */
.error-tip {
  font-size: 0.95rem;
  color: #888;
  margin: 0 0 30px 0;
  line-height: 1.5;
}
.pre-button {
  background: linear-gradient(135deg, #0080FF 0%, #00FFFF 100%);
  color: white;
  border: none;
  padding: 14px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,255,255, 0.4);
  margin-right: 20px;
}
.pre-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,255,255, 0.6);
}
.pre-button:active {
  transform: translateY(0);
}

/* 返回首页按钮 */
.home-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 14px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.home-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
}

.home-button:active {
  transform: translateY(0);
}

/* ========== 响应式设计 ========== */

/* 平板 & 手机端适配 */
@media (max-width: 768px) {
  .not-found-container {
    padding: 15px;
  }

  .not-found-content {
    padding: 30px 20px;
    gap: 25px;
  }

  .error-code {
    font-size: 3rem;
  }

  .error-title {
    font-size: 1.5rem;
  }

  .error-description {
    font-size: 1rem;
  }

  .error-tip {
    font-size: 0.9rem;
  }

  .home-button {
    padding: 12px 24px;
    font-size: 0.95rem;
  }

  .not-found-image {
    max-width: 100%;
  }
}

/* 手机端小屏进一步优化 */
@media (max-width: 480px) {
  .not-found-content {
    padding: 25px 16px;
  }

  .error-code {
    font-size: 2.5rem;
  }

  .error-title {
    font-size: 1.3rem;
  }
}
</style>