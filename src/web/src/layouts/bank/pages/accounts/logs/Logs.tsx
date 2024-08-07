import React from 'react';
import { ChevronLeft, ChevronRight, History } from 'lucide-react';
import BaseCard from '@/layouts/bank/components/BaseCard';
import locales from '@/locales';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useActiveAccount } from '@/state/accounts';
import LogsTable from './components/LogsTable';

const Logs: React.FC = () => {
  const account = useActiveAccount()!;

  return (
    <div className="flex h-full w-full flex-col gap-2 p-2">
      <BaseCard title={locales.logs} icon={History} className="h-full gap-4">
        <div>
          <Input placeholder="Search..." />
        </div>
        <div className="flex items-center gap-2">
          <Button>Date range</Button>
          <Button>Type</Button>
        </div>
        <LogsTable accountId={account.id} />
      </BaseCard>
    </div>
  );
};

export default Logs;
