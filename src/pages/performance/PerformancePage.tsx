import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { mockPerformance } from '../../data/mockData';
import { Performance } from '../../types';
import { Star, TrendingUp, TrendingDown } from 'lucide-react';

const PerformancePage: React.FC = () => {
  const [reviews] = useState<Performance[]>(mockPerformance);

  const getScoreColor = (score: number) => {
    if (score >= 4.5) return 'text-emerald-500';
    if (score >= 4.0) return 'text-blue-500';
    if (score >= 3.0) return 'text-amber-500';
    return 'text-red-500';
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Performance Reviews</h1>
        <p className="text-gray-600">Track and manage employee performance evaluations</p>
      </div>

      <div className="grid gap-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {review.employeeName}
                    </h3>
                    <p className="text-gray-600">Reviewed by {review.reviewerName}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={20} className={getScoreColor(review.score)} />
                    <span className={`text-xl font-bold ${getScoreColor(review.score)}`}>
                      {review.score.toFixed(1)}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp size={18} className="text-emerald-600" />
                      <h4 className="font-medium text-emerald-900">Strengths</h4>
                    </div>
                    <p className="text-emerald-800">{review.strengths}</p>
                  </div>

                  <div className="p-4 bg-amber-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingDown size={18} className="text-amber-600" />
                      <h4 className="font-medium text-amber-900">Areas for Improvement</h4>
                    </div>
                    <p className="text-amber-800">{review.improvements}</p>
                  </div>
                </div>

                <div className="mt-2">
                  <h4 className="font-medium text-gray-900 mb-2">Additional Comments</h4>
                  <p className="text-gray-700">{review.comments}</p>
                </div>

                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <span className="text-sm text-gray-600">Review Period: {review.period}</span>
                  <span className="text-sm text-gray-600">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PerformancePage;