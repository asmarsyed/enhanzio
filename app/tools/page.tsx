'use client'

import React, { useState, useRef } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import FishboneDiagram from '@/app/components/FishboneDiagram'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import html2canvas from 'html2canvas'

interface Cause {
  id: string;
  text: string;
}

interface Category {
  name: string;
  causes: Cause[];
  color: string;
}

const defaultCategories = [
  { name: 'Methods', causes: [], color: '#FF6B6B' },
  { name: 'Machines', causes: [], color: '#4ECDC4' },
  { name: 'People', causes: [], color: '#45B7D1' },
  { name: 'Materials', causes: [], color: '#96CEB4' },
  { name: 'Measurement', causes: [], color: '#FFEEAD' },
  { name: 'Environment', causes: [], color: '#D4A5A5' },
];

export default function IshikawaDiagram() {
  const [problem, setProblem] = useState<string>('');
  const [categories, setCategories] = useState<Category[]>(defaultCategories);
  const [activeTab, setActiveTab] = useState('input');
  const diagramRef = useRef<HTMLDivElement>(null);

  const addCause = (categoryIndex: number) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].causes.push({
      id: Math.random().toString(36).substr(2, 9),
      text: ''
    });
    setCategories(newCategories);
  };

  const updateCause = (categoryIndex: number, causeIndex: number, text: string) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].causes[causeIndex].text = text;
    setCategories(newCategories);
  };

  const removeCause = (categoryIndex: number, causeIndex: number) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].causes.splice(causeIndex, 1);
    setCategories(newCategories);
  };

  const exportAsPNG = async () => {
    if (diagramRef.current) {
      try {
        const canvas = await html2canvas(diagramRef.current, {
          backgroundColor: 'white',
          scale: 2,
        });
        
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = `ishikawa-diagram-${new Date().toISOString().split('T')[0]}.png`;
        link.click();
      } catch (error) {
        console.error('Error exporting diagram:', error);
      }
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Ishikawa (Fishbone) Diagram</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Help</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>How to Use the Ishikawa Diagram Tool</DialogTitle>
              <DialogDescription>
                <div className="space-y-4 mt-4">
                  <p>1. Start by defining your problem in the input field at the top.</p>
                  <p>2. For each category (Methods, Machines, etc.), add potential causes that contribute to the problem.</p>
                  <p>3. Use the tabs to switch between the input view and the diagram view.</p>
                  <p>4. Export your diagram as an image using the export button.</p>
                  <p className="font-semibold mt-4">Tips:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Be specific when describing causes</li>
                    <li>Consider how causes might be interconnected</li>
                    <li>Focus on actionable items</li>
                  </ul>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      
      {/* Problem Input */}
      <div className="mb-8">
        <Label htmlFor="problem" className="text-lg font-semibold mb-2 block">Define the Problem</Label>
        <Input
          id="problem"
          placeholder="Enter the main problem to analyze..."
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          className="text-lg"
        />
      </div>

      <Tabs defaultValue="input" className="w-full" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4 w-full justify-start">
          <TabsTrigger value="input">Input View</TabsTrigger>
          <TabsTrigger value="diagram">Diagram View</TabsTrigger>
        </TabsList>

        <TabsContent value="input">
          {/* Input Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side categories */}
            <div className="space-y-8">
              {categories.slice(0, 3).map((category, index) => (
                <div key={category.name} className="bg-card rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold mb-4 text-lg">{category.name}</h3>
                  <div className="space-y-2">
                    {category.causes.map((cause, causeIndex) => (
                      <motion.div
                        key={cause.id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Input
                          value={cause.text}
                          onChange={(e) => updateCause(index, causeIndex, e.target.value)}
                          placeholder="Enter cause..."
                          className="flex-1"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeCause(index, causeIndex)}
                          className="text-destructive hover:text-destructive/90"
                        >
                          ×
                        </Button>
                      </motion.div>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addCause(index)}
                      className="w-full mt-2"
                    >
                      + Add Cause
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right side categories */}
            <div className="space-y-8">
              {categories.slice(3).map((category, index) => (
                <div key={category.name} className="bg-card rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold mb-4 text-lg">{category.name}</h3>
                  <div className="space-y-2">
                    {category.causes.map((cause, causeIndex) => (
                      <motion.div
                        key={cause.id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Input
                          value={cause.text}
                          onChange={(e) => updateCause(index + 3, causeIndex, e.target.value)}
                          placeholder="Enter cause..."
                          className="flex-1"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeCause(index + 3, causeIndex)}
                          className="text-destructive hover:text-destructive/90"
                        >
                          ×
                        </Button>
                      </motion.div>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addCause(index + 3)}
                      className="w-full mt-2"
                    >
                      + Add Cause
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="diagram">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-end mb-4">
              <Button onClick={exportAsPNG} variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                Export as PNG
              </Button>
            </div>
            <div ref={diagramRef}>
              <FishboneDiagram problem={problem} categories={categories} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}