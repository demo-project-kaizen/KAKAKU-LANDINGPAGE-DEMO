/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight } from 'lucide-react';
import { KAKAKU_BLOGS } from '../../types';

export default function BlogSection() {
  return (
    <section className="py-24 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section title header */}
        <div className="flex flex-col gap-3 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-brand-teal-700"></div>
            <span className="font-mono text-[10px] tracking-widest text-brand-teal-700 uppercase font-semibold">
              The Journal
            </span>
          </div>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-brand-stone tracking-tight leading-tight">
            Our Blog and News
          </h2>
        </div>

        {/* Blog Post Card Grid matching the original design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {KAKAKU_BLOGS.map((post) => (
            <article
              key={post.id}
              className="bg-brand-sand border border-brand-stone/10 group flex flex-col hover:border-brand-teal-700 hover:shadow-md transition-all duration-300 rounded-3xl overflow-hidden"
              id={`blog-card-${post.id}`}
            >
              
              {/* Graphic Banner Area */}
              <div className="h-56 w-full overflow-hidden relative rounded-t-3xl">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-brand-stone/10 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Card Meta details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Floating Category Label Tag sitting above metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-brand-teal-900 text-brand-sand text-[8px] font-mono tracking-widest uppercase px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-[10px] font-mono text-brand-stone/40">
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-brand-stone leading-snug group-hover:text-brand-teal-700 transition-colors">
                    {post.title}
                  </h3>

                  {/* Divider line */}
                  <div className="w-8 h-[1px] bg-brand-teal-700/20 my-4 group-hover:w-16 transition-all duration-300 rounded-full"></div>

                  {/* Text Summary */}
                  <p className="text-xs text-brand-stone/70 leading-relaxed font-sans line-clamp-3">
                    {post.description}
                  </p>
                </div>

                {/* View More Link trigger matching original */}
                <div className="pt-6 mt-6 border-t border-brand-stone/5">
                  <span className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-brand-stone hover:text-brand-teal-700 transition-colors uppercase font-bold group-hover:translate-x-1 duration-300">
                    <span>View more</span>
                    <ArrowRight size={12} className="text-brand-teal-700" />
                  </span>
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
