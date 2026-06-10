"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  ThumbsUp,
} from "lucide-react";

interface Post {
  id: number;
  author: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  liked: boolean;
}

const initialPosts: Post[] = [
  {
    id: 1,
    author: "Tech Invent",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
    time: "2 цагийн өмнө",
    content: "Zehnder шинэ ERV системээ танилцууллаа! 2024 онд шинээр гаргасан ComfoAir Q350 TR систем нь өмнөх үеэсээ 15% илүү эрчим хүчний үр ашигтай. Монголын хэт хүйтэн өвлийн нөхцөлд тохирсон шийдэл.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    likes: 124,
    comments: 18,
    shares: 5,
    liked: false,
  },
  {
    id: 2,
    author: "Tech Invent",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
    time: "5 цагийн өмнө",
    content: "Барилгын салбарт 100 гаруй төсөл амжилттай хэрэгжүүлсэн нь бидний чадвар, туршлагын томоохон баталгаа боллоо. Та бүхэнд талархлаа илэрхийлье!",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    likes: 89,
    comments: 12,
    shares: 3,
    liked: false,
  },
  {
    id: 3,
    author: "Tech Invent",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
    time: "1 өдрийн өмнө",
    content: "BWT-ийн шинэ магнийн технологиор ус цэвэршүүлэх системийг Монголд нэвтрүүллээ. Хатуу усны нөхцөлд тохирсон шийдэл.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
    likes: 67,
    comments: 8,
    shares: 2,
    liked: false,
  },
  {
    id: 4,
    author: "Tech Invent",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
    time: "3 өдрийн өмнө",
    content: "Монгол улсад дулааны системийн шинэ стандарт батлагдсантай холбогдуулан бид бэлэн байна. Европын шилдэг технологи, Монголын зах зээлд.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    likes: 45,
    comments: 6,
    shares: 1,
    liked: false,
  },
];

export default function NewsPage() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  return (
    <main className="flex-1 bg-surface min-h-screen pt-20">
      <div className="max-w-[680px] mx-auto px-4 py-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-2xl font-bold text-secondary mb-2">Мэдээ мэдээлэл</h1>
          <p className="text-text-secondary">Tech Invent-ийн сүүлийн үеийн мэдээ</p>
        </motion.div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-primary flex items-center justify-center">
                    <span className="text-white font-bold">T</span>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">{post.author}</p>
                    <p className="text-sm text-text-muted">{post.time}</p>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="px-4 pb-3">
                <p className="text-secondary">{post.content}</p>
              </div>

              {/* Post Image */}
              {post.image && (
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.content}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Post Stats */}
              <div className="px-4 py-3 flex items-center justify-between border-b border-border">
                <div className="flex items-center gap-1">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <ThumbsUp className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-text-muted">{post.likes}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-text-muted">{post.comments} сэтгэгдэл</span>
                  <span className="text-sm text-text-muted">{post.shares} хуваалцсан</span>
                </div>
              </div>

              {/* Post Actions */}
              <div className="px-4 py-2 flex items-center justify-between">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 hover:bg-surface rounded-lg transition-colors ${
                    post.liked ? "text-primary" : "text-text-secondary"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${post.liked ? "fill-primary" : ""}`} />
                  <span className="text-sm font-medium">Таалагдлаа</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-surface rounded-lg transition-colors text-text-secondary">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Сэтгэгдэл</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-surface rounded-lg transition-colors text-text-secondary">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Хуваалцах</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
