import { Upload, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function ImportExportPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-h2 font-semibold text-foreground">Import & export</h1>
        <p className="mt-1 text-muted-foreground">Data ingestion and content export</p>
      </div>

      <Tabs defaultValue="import" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="import">Import</TabsTrigger>
          <TabsTrigger value="export">Export</TabsTrigger>
        </TabsList>
        <TabsContent value="import" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Import
              </CardTitle>
              <CardDescription>
                Upload CSV or JSON and map columns to board nodes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-2">Drag and drop or click to upload</p>
                <p className="text-xs text-muted-foreground">CSV, JSON up to 10MB</p>
                <Button variant="outline" size="sm" className="mt-4">Choose file</Button>
              </div>
              <div className="space-y-2">
                <Label>Column mapping</Label>
                <p className="text-xs text-muted-foreground">Map columns after uploading.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="export" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Export
              </CardTitle>
              <CardDescription>
                Export selected area or nodes as PNG, PDF, CSV, or JSON.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Format</Label>
                <Select defaultValue="png">
                  <SelectTrigger className="w-full max-w-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="png">PNG image</SelectItem>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="json">JSON (full)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Resolution (for image)</Label>
                <Select defaultValue="2x">
                  <SelectTrigger className="w-full max-w-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1x">1x</SelectItem>
                    <SelectItem value="2x">2x</SelectItem>
                    <SelectItem value="3x">3x</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Import/export history</CardTitle>
          <CardDescription>Recent imports and downloads</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No recent activity.</p>
        </CardContent>
      </Card>
    </div>
  )
}
