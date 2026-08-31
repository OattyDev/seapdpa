'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react';
import { type Locale } from '@/lib/i18n';
import { getAssess, getCommon } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';
import { Badge } from '@/components/ui/Badge';

export default function AssessPage() {
  const params = useParams();
  const locale = params.locale as Locale;
  const assess = getAssess(locale);
  const common = getCommon(locale);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  
  useEffect(() => {
    const saved = localStorage.getItem('seapdpa-assessment');
    if (saved) {
      const parsed = JSON.parse(saved);
      setAnswers(parsed.answers || {});
      if (parsed.completed) {
        setShowResults(true);
      }
    }
  }, []);
  
  const questions = assess.questions;
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxScore = totalQuestions * 2;
  
  const getLevel = () => {
    if (totalScore <= 8) return assess.results.levels.low;
    if (totalScore <= 16) return assess.results.levels.medium;
    return assess.results.levels.high;
  };
  
  const handleAnswer = (questionId: string, value: number) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    localStorage.setItem('seapdpa-assessment', JSON.stringify({ answers: newAnswers, completed: false }));
  };
  
  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      localStorage.setItem('seapdpa-assessment', JSON.stringify({ answers, completed: true }));
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const handleReset = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
    localStorage.removeItem('seapdpa-assessment');
  };
  
  if (showResults) {
    const level = getLevel();
    return (
      <div className="max-w-[800px] mx-auto px-4 md:px-6 py-8 md:py-12">
        <Card>
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-text-primary">{assess.results.title}</h1>
              <div className="text-4xl font-bold text-accent">
                {totalScore} <span className="text-lg text-text-secondary font-normal">{assess.results.outOf} {maxScore}</span>
              </div>
            </div>
            
            <Progress value={totalScore} max={maxScore} showLabel className="h-3" />
            
            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant={totalScore <= 8 ? 'error' : totalScore <= 16 ? 'warning' : 'success'}>
                  {level.range}
                </Badge>
                <h2 className="text-xl font-semibold text-text-primary">{level.title}</h2>
              </div>
              <p className="text-text-secondary mb-6">{level.description}</p>
              
              <h3 className="font-semibold text-text-primary mb-3">{assess.results.nextSteps}</h3>
              <ul className="space-y-2 mb-6">
                {level.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-accent mt-1">•</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
              <Link href={`/${locale}/checklist`}>
                <Button>
                  {assess.results.viewChecklist}
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Button variant="ghost" onClick={handleReset}>
                <RotateCcw size={16} />
                {common.actions.reset}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
  
  const question = questions[currentQuestion];
  const currentAnswer = answers[question.id];
  
  return (
    <div className="max-w-[800px] mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">{assess.title}</h1>
          <p className="text-text-secondary">{assess.subtitle}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <Progress value={answeredCount} max={totalQuestions} className="flex-1" />
          <span className="text-sm text-text-secondary tabular-nums">
            {currentQuestion + 1}/{totalQuestions}
          </span>
        </div>
        
        <Card>
          <div className="space-y-6">
            <div>
              <Badge className="mb-3">{question.category}</Badge>
              <h2 className="text-lg font-semibold text-text-primary">{question.question}</h2>
            </div>
            
            <div className="space-y-3">
              {question.options.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center gap-3 p-4 rounded-[6px] border cursor-pointer transition-colors ${
                    currentAnswer === option.value
                      ? 'border-accent bg-accent-light'
                      : 'border-border hover:border-text-muted'
                  }`}
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={option.value}
                    checked={currentAnswer === option.value}
                    onChange={() => handleAnswer(question.id, option.value)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    currentAnswer === option.value ? 'border-accent' : 'border-border'
                  }`}>
                    {currentAnswer === option.value && (
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    )}
                  </div>
                  <span className="text-text-primary">{option.label}</span>
                </label>
              ))}
            </div>
            
            <div className="flex justify-between pt-4 border-t border-border">
              <Button
                variant="ghost"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft size={16} />
                {common.actions.previous}
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentAnswer === undefined}
              >
                {currentQuestion === totalQuestions - 1 ? common.actions.finish : common.actions.next}
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}