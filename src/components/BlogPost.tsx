
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    author: string;
  };
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 pt-40 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          onClick={onBack}
          variant="ghost" 
          className="mb-8 text-green-700 hover:text-green-800 hover:bg-green-100/50"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
        
        <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-2xl border-0 overflow-hidden animate-fade-in">
          <div className="aspect-video overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <CardHeader className="p-8">
            <div className="flex items-center gap-4 text-sm text-green-600 mb-4">
              <span className="bg-green-100 px-3 py-1 rounded-full font-medium">{post.category}</span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </div>
            </div>
            
            <CardTitle className="text-4xl font-bold text-gray-800 leading-tight">
              {post.title}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8 pt-0">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogPost;
